import { useState } from "react";

import { useAppSelector } from "../../../../redux/hooks/reduxHooks";

import { useOutsideClick } from "../../../../hooks/useOutsideClick";

import CurrenciesList from "../CurrenciesList/CurrenciesList";

import styles from "./styles.module.scss";
import arrow from "../../../../assets/chevron-down.svg";

import { IProps } from "../../../../types/types";

const CurrenciesMenu = ({ currencies }: IProps) => {
  const [showBar, setBarVisibility] = useState<boolean>(false);
  const { id } = useAppSelector((state) => state.currencyReducer);

  const handleClick = () => setBarVisibility((prevState) => !prevState);

  const handleOutsideClick = () => setBarVisibility(false);

  const ref = useOutsideClick(handleOutsideClick);

  return (
    <>
      {currencies && (
        <div className={styles.menu} onClick={handleClick} ref={ref}>
          {showBar && <CurrenciesList currencies={currencies} />}
          <span>{currencies && id}</span>
          <img src={arrow} alt="arrow svg" />
        </div>
      )}
    </>
  );
};

export default CurrenciesMenu;
