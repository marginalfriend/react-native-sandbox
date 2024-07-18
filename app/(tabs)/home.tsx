import ThemedButton from "@/components/ThemedButton";
import { COINGECKO_URL } from "@/constants/URL";
import { formatToUSD } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Coin = {
  id: string;
  symbol: string;
  current_price: number;
  market_cap: number;
  name: string;
  image: string;
  total_volume: number;

  market_cap_rank?: number;
  fully_diluted_valuation?: number;
  high_24h?: number;
  low_24h?: number;
  price_change_24h?: number;
  price_change_percentage_24h?: number;
  market_cap_change_24h?: number;
  market_cap_change_percentage_24h?: number;
  circulating_supply?: number;
  total_supply?: number;
  max_supply?: number;
  ath?: number;
  ath_change_percentage?: number;
  ath_date?: string;
  atl?: number;
  atl_change_percentage?: number;
  atl_date?: string;
  roi?: null;
  last_updated?: string;
};

const CoinView = ({
  symbol,
  name,
  image,
  current_price,
  total_volume,
  market_cap,
  market_cap_rank,
}: Coin) => (
  <View className="flex flex-row justify-center align-middle items-center border-[0.95px] px-4 py-1 my-1 bg-background">
    <View className="flex-1 justify-center items-center align-middle w-30 h-30">
      <Text className="font-jsemibold text-center">#{market_cap_rank}</Text>
      <Image
        resizeMode="contain"
        className="h-16 w-16 rounded-full"
        source={{
          uri: image,
        }}
      />
      <Text className="font-jsemibold text-xs text-green-600">
        ${symbol.toUpperCase()}
      </Text>
      <Text className="font-jsemibold text-[10px] text-center">{name}</Text>
    </View>
    <View className="flex flex-grow pl-10">
      <Text className="font-regular text-xs text-foreground">
        Current Price
      </Text>
      <Text className="font-jsemibold">{formatToUSD(current_price)}</Text>
      <Text className="pt-2 font-regular text-xs text-foreground">
        Total Vol.
      </Text>
      <Text className="font-jsemibold">{formatToUSD(total_volume)}</Text>
      <Text className="pt-2 font-regular text-xs text-foreground">
        Market Cap
      </Text>
      <Text className="font-jsemibold">{formatToUSD(market_cap)}</Text>
    </View>
  </View>
);

const Home = () => {
  const [data, setData] = useState<Coin[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | any>(null);
  const [page, setPage] = useState(1);

  const handleNext = () => {
		setIsLoading(true)
    setPage(page + 1);
  };

  const handlePrevious = () => {
		setIsLoading(true)
    setPage(page - 1);
  };

  function fetchData() {
    const params = new URLSearchParams();

    params.append("per_page", "10");
    params.append("vs_currency", "usd");
    params.append("page", page.toString());

    const options = {
      method: "GET",
      headers: {
        "x-cg-api-key": "CG-rxBMcsurAnSLivpmbUASRch7",
        accept: "application/json",
      },
    };

    fetch(`${COINGECKO_URL}/coins/markets?${params.toString()}`, options)
      .then(
        (res: Response) => {
          console.log("Response: " + res);
          return res.json();
        },

        (error) => {
          console.log("Error from response: " + error);
          setError(error);
          setIsLoading(false);
        }
      )
      .then(
        (data: Coin[]) => {
          console.log("Data: " + data);
          setData(data);
          setIsLoading(false);
        },

        (error) => {
          console.log("Error from setData: " + error);
          setError(error);
          setIsLoading(false);
        }
      );
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  const getContent = () => {
    if (isLoading) {
      return (
        <View className="border-[0.9px] flex-shrink w-36 py-8 bg-background">
          <ActivityIndicator color="#6C757D" size="large" />
          <Text className="text-center font-regular pt-2 text-xs text-foreground">
            Loading data...
          </Text>
        </View>
      );
    }

    if (error) {
      return (
        <Text className="font-jsemibold text-danger bg-red-200 p-2 text-center">
          Error fetching API: {error.message}
        </Text>
      );
    }

    return (
      <FlatList
        className="w-full"
        data={data}
        keyExtractor={(coin: Coin) => coin.id}
        renderItem={({ item }) => (
          <CoinView
            id={item.id}
            symbol={item.symbol}
            name={item.name}
            image={item.image}
            current_price={item.current_price}
            total_volume={item.total_volume}
            market_cap={item.market_cap}
            market_cap_rank={item.market_cap_rank}
          />
        )}
      />
    );
  };

  return (
    <SafeAreaView className="h-full flex-1">
      <Text className="p-5 font-jbold text-xl bg-background border-b-[0.95px] text-center">
        Top Market Cap
      </Text>
      <ScrollView>
        <View className="w-full justify-center items-center h-full min-h-[85vh] my-2 px-2 flex-1">
          {getContent()}
        </View>
        <View className="flex-1 flex-row justify-end align-middle">
          {page != 1 && (
            <ThemedButton
              buttonStyle="w-[50%] m-1"
              text={"< Previous"}
              handlePress={handlePrevious}
            />
          )}
          <ThemedButton
            buttonStyle="w-[50%] m-1"
            text={"Next >"}
            handlePress={handleNext}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
