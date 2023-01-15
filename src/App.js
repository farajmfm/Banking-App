import 'bulma'
import AccountType from './Components/AccountType';
import Balance from './Components/Balance';
import Banking from './Components/Banking';
import Header from './Components/Header';

function App() {
  return (
    <div className='section'>
      <Header />
      <Balance />
      <AccountType />
      <Banking />
    </div>
  );
}

export default App;
