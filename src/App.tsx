import './index.css';
import { CurrencyConversion } from '@/features/currency-conversion/ui/CurrencyConversion';

import { MainLayout } from './layouts/MainLayout';

function App() {
  return (
    <MainLayout>
      <CurrencyConversion />
    </MainLayout>
  );
}

export default App;
