import { useAppDispatch } from "../../../../redux/hooks/reduxHooks";

import { currencySlice } from "../../../../redux/slices/currenciesSlice";
import { IProps } from "../../../../types/types";

import styles from "./styles.module.scss";

const CurrenciesList = ({ currencies }: IProps) => {
  const { change } = currencySlice.actions;
  const dispath = useAppDispatch();
  return (
    <div className={styles.list}>
      {currencies &&
        currencies.map((currency) => (
          <span
            className={styles.item}
            key={currency.id}
            onClick={() => {
              dispath(change(currency));
            }}
          >
            {currency.id}
          </span>
        ))}
    </div>
  );
};

export default CurrenciesList;
