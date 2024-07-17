import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COINGECKO_URL } from "@/constants/URL";

type TGTLResponse = {
  top_gainers: Coin[];
  top_losers: Coin[];
};

type Coin = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  usd: number;
  usd_24h_vol: number;
  usd_1y_change: number;
};

const Home = () => {
  const [data, setData] = useState<Coin[]>([]);
  // useEffect(() => {
  //   fetch(`${COINGECKO_URL}/coins/top_gainers_losers`, {
  //     method: "GET",
  //     headers: {
  //       "x-cg-pro-api-key": "CG-rxBMcsurAnSLivpmbUASRch7",
  //       accept: "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data: TGTLResponse) => setData(data.top_gainers));
  // }, []);
  return (
    <SafeAreaView>
      {/* <FlatList
        data={data}
        keyExtractor={(coin) => coin.id}
        renderItem={({ coin }: { coin: Coin }) => <Text>{coin.id}</Text>}
      /> */}
    </SafeAreaView>
  );
};

export default Home;
