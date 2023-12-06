import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header/Header.tsx";
import CurrencyShowcase from "./components/CurrencyShowcase/CurrencyShowcase.tsx";

import { currenciesData } from "../../types/types.ts";
import { IApiResponse } from "../../types/types.ts";

import styles from "./styles.module.scss";

const Home = () => {
  const [currencies, setCurrencies] = useState<currenciesData[]>();

  const getCurrencies = async () => {
    try {
      const { data } = await axios.get<IApiResponse>(
        "https://api.coinbase.com/v2/currencies"
      );
      setCurrencies(data.data);
    } catch (error) {
      console.log("An error occured", error);
    }
  };

  useEffect(() => {
    getCurrencies();
  }, []);

  return (
    <div className={styles.home}>
      {currencies && (
        <>
          <Header currencies={currencies} />
          <CurrencyShowcase />
        </>
      )}
    </div>
  );
};

export default Home;
