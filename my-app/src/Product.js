export class Product {
    constructor(name, brand, price) {
        this.id = Math.random().toString(36).substr(2, 9);
        this.name = name;
        this.brand = brand;
        this.price = price;
    }
};

export var ProductsArr = [
    new Product('Iphone 12', 'Apple', 12000),
    new Product('Samsung Galaxy S20', 'Samsung', 10000),
    new Product('Xiaomi Mi 11', 'Xiaomi', 8000),
    new Product('Huawei P40 Pro', 'Huawei', 9000),
    new Product('OnePlus 8 Pro', 'OnePlus', 11000),
    new Product('Nokia 12', 'Nokia', 8500),
    new Product('BlackBerry Q10', 'BlackBerry', 6500),
    new Product('Oppo Reno 5', 'Oppo', 7500),
    new Product('Google Pixel 5', 'Google', 10500),
    new Product('Samsung Galaxy A51', 'Galaxy', 10500),
];