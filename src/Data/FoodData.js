export const foodItems = [
    {
        name: 'Big Burger',
        imageUrl: '/img/burger.jpg',
        category: 'bunz'
    },
    {
        name: 'Cheese Burger',
        imageUrl: '/img/cheese-burger.jpg',
        category: 'bunz'
    },
    {
        name: 'Chicken One',
        imageUrl: '/img/chicken-burger.jpg',
        category: 'bunz'
    },
    {
        name: 'The Burger Of The Demon',
        imageUrl: '/img/burger.jpg',
        category: 'bunz'
    },
    {
        name: 'Big Burger',
        imageUrl: '/img/burger.jpg',
        category: 'combo'
    },
    {
        name: 'Cheese Burger',
        imageUrl: '/img/cheese-burger.jpg',
        category: 'combo'
    },
    {
        name: 'Chicken One',
        imageUrl: '/img/chicken-burger.jpg',
        category: 'combo'
    },
    {
        name: 'The Burger Of The Demon',
        imageUrl: '/img/burger.jpg',
        category: 'combo'
    },
    {
        name: 'Big Burger',
        imageUrl: '/img/burger.jpg',
        category: 'starter'
    },
    {
        name: 'Cheese Burger',
        imageUrl: '/img/cheese-burger.jpg',
        category: 'starter'
    },
    {
        name: 'Chicken One',
        imageUrl: '/img/chicken-burger.jpg',
        category: 'starter'
    },
    {
        name: 'The Burger Of The Demon',
        imageUrl: '/img/burger.jpg',
        category: 'starter'
    },
];

export const foods = foodItems.reduce((res, food) => {
    if(!res[food.category]) {
        res[food.category] = [];
    }
    res[food.category].push(food);
    return res;
}, {});