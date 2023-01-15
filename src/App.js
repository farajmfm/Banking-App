import 'bulma'
import Balance from './Components/Balance';
import Banking from './Components/Banking';
import Header from './Components/Header';

function App() {
  return (
    <div className='section'>
      <Header />
      <Banking />
      <Balance />
    </div>
  );
}

export default App;
