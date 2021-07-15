const ExpenseItemDesc = (props) => {
    const classes = props.className
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default ExpenseItemDesc