import { convertFromCurrencyWatcher } from './convertFromCurrencySaga';
import { getCurrenciesListWatcher } from './getCurrenciesListSaga';

export default [getCurrenciesListWatcher(), convertFromCurrencyWatcher()];
