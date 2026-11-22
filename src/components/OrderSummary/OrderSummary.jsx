
function OrderSummary({totalScoops}) {

    return (
        totalScoops == 0 ? <span>Your order is empty</span> :
        <h2>Total scoops: {totalScoops} , Total Price: {totalScoops*10}</h2>
    )
}

export default OrderSummary