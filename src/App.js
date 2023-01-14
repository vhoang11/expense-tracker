import './App.css';
import Header from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './components/context/GlobalState';

function App() {
  return (
    <GlobalProvider className="App">
      <Header />
      <div className='container'>
        <Balance />
      </div>
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
