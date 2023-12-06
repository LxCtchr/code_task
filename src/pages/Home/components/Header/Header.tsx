import styles from "./styles.module.scss";

import kitten from "../../../../assets/Kitten.png";

import CurrenciesMenu from "../CurrenciesMenu/CurrenciesMenu";

import { IProps } from "../../../../types/types";

const Header = ({ currencies }: IProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <div className={styles.content}>
          <h1 className={styles.title}>CAT</h1>
          <div className={styles.text}>
            <span>currencies</span>
            <span>academic</span>
            <span>terms</span>
          </div>
        </div>
        <CurrenciesMenu currencies={currencies} />
      </div>
      <img src={kitten} alt="Img of kitten" className={styles.kitten} />
    </div>
  );
};

export default Header;
