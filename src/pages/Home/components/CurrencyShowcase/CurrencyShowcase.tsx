import { useAppSelector } from "../../../../redux/hooks/reduxHooks";
import styles from "./styles.module.scss";

const CurrencyShowcase = () => {
  const { name } = useAppSelector((state) => state.currencyReducer);
  return (
    <div className={styles.showcase}>
      <h2>{name}</h2>
    </div>
  );
};

export default CurrencyShowcase;
