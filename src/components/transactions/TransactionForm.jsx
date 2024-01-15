import { useState } from "react"
import { useGlobalState } from "../../context/GlobalState"; 

function TransactionForm() {
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState()
  const [amount, setAmount] = useState()

  const onSubmit = (e) => {
    e.preventDefault()
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount
    })
  }

  return (
    <div>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Enter a Description" onChange={(e) => setDescription(e.target.value)}/>
            <input type="number" placeholder="00.00" step="0.01" onChange={(e) => setAmount(e.target.value)} />
            <button> Add Transaction </button>
        </form>
    </div>
  )
}

export default TransactionForm
