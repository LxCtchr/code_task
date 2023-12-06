export type currenciesData = {
  id: string;
  name: string;
  min_size: string;
};

export interface IApiResponse {
  data: currenciesData[];
}

export interface IProps {
  currencies: currenciesData[];
}
