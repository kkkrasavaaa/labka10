// Функція для збереження замовлень в localStorage
function saveOrdersToStorage(orders) {
    localStorage.setItem('orders', JSON.stringify(orders));
}

// Функція для отримання замовлень з localStorage
function getOrdersFromStorage() {
    const orders = localStorage.getItem('orders');
    return orders ? JSON.parse(orders) : [];
}

// Функція для додавання нового замовлення
function addOrder(order) {
    const orders = getOrdersFromStorage();
    orders.push(order);
    saveOrdersToStorage(orders);
}

// Функція для відображення замовлень на сторінці
function displayOrders() {
    const orders = getOrdersFromStorage();
    const table = document.getElementById('orders-table');

    orders.forEach(order => {
        const newRow = table.insertRow(-1);
        newRow.insertCell(0).innerText = order.name;
        newRow.insertCell(1).innerText = order.address;
        newRow.insertCell(2).innerText = order.phone;
        newRow.insertCell(3).innerText = order.email;
        newRow.insertCell(4).innerText = order.coffeeType;
        newRow.insertCell(5).innerText = order.quantity;
    });
}

// Відображення замовлень при завантаженні сторінки
displayOrders();

document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const coffeeType = document.getElementById('coffee-type').value;
    const quantity = document.getElementById('quantity').value;

    const order = {
        name: name,
        address: address,
        phone: phone,
        email: email,
        coffeeType: coffeeType,
        quantity: quantity,
    };

    addOrder(order);

    const table = document.getElementById('orders-table');
    const newRow = table.insertRow(-1);

    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = address;
    newRow.insertCell(2).innerText = phone;
    newRow.insertCell(3).innerText = email;
    newRow.insertCell(4).innerText = coffeeType;
    newRow.insertCell(5).innerText = quantity;

    event.target.reset();
});