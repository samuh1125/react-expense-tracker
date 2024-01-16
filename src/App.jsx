import { GlobalProvider } from './context/GlobalState'
import TransactionForm from './components/transactions/TransactionForm'
import Balance from './components/Balance'
import TransactionList from './components/transactions/TransactionList'
import IncomeExpenses from './components/IncomeExpenses'

function App() {
  return (
    <GlobalProvider >
      <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
        <div className="container mx-auto w-2/4">
          <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-4">
            <div className="container mx-auto w-3/6">
              <h1 className="text-4x1 font-bold">Seguimiento de gastos</h1>
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className="w-full max-h-[22rem] overflow-y-auto">
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  )
}

export default App
