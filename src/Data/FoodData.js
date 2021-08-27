export const formatPrice = (price) => {
    return price.toLocaleString('fr-FR', {
         style: 'currency', 
         currency: 'EUR'
    });
}

export const getOrderPrice = (order) => {
    return order.quantity * order.price;
} 

export const getSubTotalPrice = (orders) => {
    return orders.reduce((total, order) => (total + getOrderPrice(order)), 0);
}

export const foodItems = [
    {
        name: 'Big Burger',
        imageUrl: '/img/burger.jpg',
        category: 'bunz',
        price: 6
    },
    {
        name: 'Cheese Burger',
        imageUrl: '/img/cheese-burger.jpg',
        category: 'bunz',
        price: 7
    },
    {
        name: 'Chicken One',
        imageUrl: '/img/chicken-burger.jpg',
        category: 'bunz',
        price: 6
    },
    {
        name: 'The Burger Of The Demon',
        imageUrl: '/img/burger.jpg',
        category: 'bunz',
        price: 8
    },
    {
        name: 'Big Burger',
        imageUrl: '/img/burger.jpg',
        category: 'combo',
        price: 9
    },
    {
        name: 'Cheese Burger',
        imageUrl: '/img/cheese-burger.jpg',
        category: 'combo',
        price: 9
    },
    {
        name: 'Chicken One',
        imageUrl: '/img/chicken-burger.jpg',
        category: 'combo',
        price: 9
    },
    {
        name: 'The Burger Of The Demon',
        imageUrl: '/img/burger.jpg',
        category: 'combo',
        price: 9
    },
    {
        name: 'Big Burger',
        imageUrl: '/img/burger.jpg',
        category: 'starter',
        price: 9
    },
    {
        name: 'Cheese Burger',
        imageUrl: '/img/cheese-burger.jpg',
        category: 'starter',
        price: 9
    },
    {
        name: 'Chicken One',
        imageUrl: '/img/chicken-burger.jpg',
        category: 'starter',
        price: 9
    },
    {
        name: 'The Burger Of The Demon',
        imageUrl: '/img/burger.jpg',
        category: 'starter',
        price: 9
    },
];

export const foods = foodItems.reduce((res, food) => {
    if(!res[food.category]) {
        res[food.category] = [];
    }
    res[food.category].push(food);
    return res;
}, {});