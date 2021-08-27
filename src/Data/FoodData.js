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

export const isCombo = (food) => {
    return food.category === 'combo';
}

export const isComboA = (food) => {
    return (food.category === 'combo') && (food.subTitle === 'combo1');
}

export const isPlan = (food) => {
    return food.category === 'plans';
}

export const foodItems = [
    {
        name: 'Authentic',
        imageUrl: '/img/burger.jpg',
        category: 'bob',
        price: 2.5
    },
    {
        name: 'Bomb',
        imageUrl: '/img/cheese-burger.jpg',
        category: 'bob',
        price: 2.5
    },
    {
        name: 'Cheesy',
        imageUrl: '/img/chicken-burger.jpg',
        category: 'bob',
        price: 2.5
    },
    {
        name: 'Thon',
        imageUrl: '/img/burger.jpg',
        category: 'bob',
        price: 2.5
    },
    {
        name: 'Veggi',
        imageUrl: '/img/burger.jpg',
        category: 'bob',
        price: 2.5
    },
    {
        name: 'Ginger',
        imageUrl: '/img/cheese-burger.jpg',
        category: 'bob',
        price: 2.5
    },
    {
        name: 'Salade papaye / boeuf',
        imageUrl: '/img/chicken-burger.jpg',
        category: 'starters',
        price: 4.5
    },
    {
        name: 'Spring Roll-up Poulet X 2',
        imageUrl: '/img/burger.jpg',
        category: 'starters',
        price: 2
    },
    {
        name: 'Spring Roll-up Boeuf X 2',
        imageUrl: '/img/burger.jpg',
        category: 'starters',
        price: 2
    },
    {
        name: 'Spring Roll-up Crevette X 2',
        imageUrl: '/img/burger.jpg',
        category: 'starters',
        price: 2.5
    },
    {
        name: 'Pho',
        imageUrl: '/img/burger.jpg',
        category: 'bols',
        price: 10.5
    },
    {
        name: 'Loc-Lac',
        imageUrl: '/img/cheese-burger.jpg',
        category: 'bols',
        price: 10.5
    },
    {
        name: 'Bo-Bun Crevettes',
        imageUrl: '/img/chicken-burger.jpg',
        category: 'bols',
        price: 10
    },
    {
        name: 'Bo-Bun Boeuf',
        imageUrl: '/img/chicken-burger.jpg',
        category: 'bols',
        price: 10
    },
    {
        name: 'Bo-Bun Poulet',
        imageUrl: '/img/chicken-burger.jpg',
        category: 'bols',
        price: 10
    },
    {
        name: '8 bOb',
        imageUrl: '/img/chicken-burger.jpg',
        category: 'plans',
        limit: 8,
        price: 12
    },
    {
        name: '12 bOb',
        imageUrl: '/img/chicken-burger.jpg',
        category: 'plans',
        limit: 12,
        price: 15
    },
    {
        name: '15 bOb',
        imageUrl: '/img/chicken-burger.jpg',
        category: 'plans',
        limit: 15,
        price: 23
    },
    {
        name: '20 bOb',
        imageUrl: '/img/chicken-burger.jpg',
        category: 'plans',
        limit: 20,
        price: 30
    },
    {
        name: 'Starter + bOb x 2 + boisson',
        imageUrl: '/img/chicken-burger.jpg',
        category: 'combo',
        combo: {
                starters: ["Spring Roll-up Poulet", "Spring Roll-up Boeuf", "Spring Roll-up Crevettes"],
                bobs: ["Authentic", "Bomb", "Cheesy", "Thon", "Veggi", "Ginger"],
                drinks: ['Coca cola', 'Sprite', 'Fanta', 'Orangina']
        },
        subTitle: 'combo1',
        price: 7
    },
    {
        name: 'bOb + Bol + boisson',
        imageUrl: '/img/chicken-burger.jpg',
        category: 'combo',
        combo: {
                bobs: ["Authentic", "Bomb", "Cheesy", "Thon", "Veggi", "Ginger"],
                drinks: ['Coca cola', 'Sprite', 'Fanta', 'Orangina'],
                bols: ["Bo-Bun Crevettes", "Bo-Bun Poulet", "Bo-Bun Boeuf"]
        },
        subTitle: 'combo2',
        price: 12.5
    },
    {
        name: 'Soft drink',
        imageUrl: '/img/chicken-burger.jpg',
        category: 'drink',
        choices: ['Coca cola', 'Sprite', 'Fanta', 'Orangina'],
        price: 2
    },
    {
        name: 'Café glacé',
        imageUrl: '/img/chicken-burger.jpg',
        category: 'drink',
        price: 3.5
    },
    {
        name: 'Jus de coco',
        imageUrl: '/img/chicken-burger.jpg',
        category: 'drink',
        price: 2.5
    },
    {
        name: 'Tiramisu',
        imageUrl: '/img/chicken-burger.jpg',
        category: 'dessert',
        price: 3.5
    },
    {
        name: 'Salade de fruits',
        imageUrl: '/img/chicken-burger.jpg',
        category: 'dessert',
        price: 3.5
    }
];

export const foods = foodItems.reduce((res, food) => {
    if(!res[food.category]) {
        res[food.category] = [];
    }
    res[food.category].push(food);
    return res;
}, {});