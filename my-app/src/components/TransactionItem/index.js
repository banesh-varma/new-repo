const TransactionItem = props => {
    const {eachItem, onUpdatingState} = props
    const {id, title, amount, type} = eachItem
    const onDelete = () => {
        onUpdatingState(id)
    }
    return (
        <li className="table-header">
            <p className="table-header-cell name-column">{title}</p>
            <hr className="separator" />
            <p className="table-header-cell name-column">{amount}</p>
            <hr className="separator" />
            <p className="table-header-cell title-column">{type} <img className="delete-png ml-5" src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png" onClick={onDelete} alt="delete" /></p>
        </li>
    )
}

export default TransactionItem