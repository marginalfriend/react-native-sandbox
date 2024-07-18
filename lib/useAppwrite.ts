import { useState, useEffect } from "react";
import { Alert } from "react-native";

const useAppwrite = (fn: any) => {
	const [data, setData] = useState<any>();
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const fetchData = async () => {
		setIsLoading(true);

		try {
			const response = await fn()
			console.log(response)
			setData(response)
		} catch (error: any) {
			Alert.alert(error.message);
		} finally {
			setIsLoading(false)
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const refetch = () => fetchData()

	return { data, isLoading, refetch }
}

export default useAppwrite