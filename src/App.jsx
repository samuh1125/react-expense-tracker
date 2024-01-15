import {GlobalProvider} from './context/GlobalState'
import Header from './components/Header'
import TransactionForm from './components/transactions/TransactionForm'
import Balance from './components/Balance'
import TransactionList from './components/transactions/TransactionList'

function App() {
  return (
    <GlobalProvider >
      <Header />
      <TransactionForm />
      <TransactionList />
      <Balance />
      <h1>Hello World</h1>
    </GlobalProvider>
  )
}

export default App
