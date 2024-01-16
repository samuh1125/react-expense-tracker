import { useGlobalState } from "../../context/GlobalState"

export function TransactionItem({ transaction }) {

    const { deleteTransaction } = useGlobalState()

    return (
        <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex items-center">
            <p className="text-sm">{transaction.description}</p>
            <span className="ml-auto pr-3">${transaction.amount}</span>
            <div className="bg-indigo-400 text-white py-2 rounded-lg px-3">
                <button
                    onClick={() => {
                        deleteTransaction(transaction.id)
                    }}>
                    X
                </button>
            </div>
        </li>
    )
}

export default TransactionItem