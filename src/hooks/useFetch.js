import { useState, useEffect } from "react";

const useFetch = (getAPI, initialValue) => {
  // getAPI : getAPI 함수, initialValue : response JSON 데이터 기본값
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAPI();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // eslint-disable-next-line
  }, []);

  return data; // data : response JSON
};

export default useFetch;
