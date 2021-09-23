export interface ICurrency {
  fromCurrency: string;
  toCurrency: string;
  amount: number;
}

export interface ICurrencyListItem {
  iso: string;
  currency_name: string;
  is_obsolete: boolean;
}
