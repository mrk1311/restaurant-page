const makeOrder = () => {
    const order = document.createElement('div');
    order.setAttribute('id', 'orderDiv');
    order.classList.add('main')
    const orderText = document.createElement('p');
    orderText.textContent = 'Order here';
    order.appendChild(orderText);
    return order;
}

export default makeOrder;