import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductComponent from './ProductComponent';
import { Product, ProductsArr } from './Product';

function App() {
    const [products, setProducts] = useState(ProductsArr);

    const addProduct = () => {
        const name = prompt('Enter a product name');
        const brand = prompt('Enter a brand');
        const price = parseFloat(prompt('Enter a price'));

        if (name && brand && !isNaN(price)) {
            const newProduct = new Product(name, brand, price);
            setProducts([...products, newProduct]);
        }
    };

    const deleteProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    const editProduct = (id) => {
        const product = products.find(p => p.id === id);
        if (product) {
            const newName = prompt('Enter new name', product.name);
            const newBrand = prompt('Enter new brand', product.brand);
            const newPrice = parseFloat(prompt('Enter new price', product.price));

            if (newName && newBrand && !isNaN(newPrice)) {
                setProducts(
                    products.map(prod =>{
                        if (prod.id === id) {
                          prod.name = newName;
                          prod.brand = newBrand;
                          prod.price = newPrice;
                        }
                        return prod;
                      }
                    )
                );
            }
        }
    };

    return (
        <div className="App container">
            <h1 className="my-4">List Product</h1>
            <div className="row">
                {products.map(product => (
                    <ProductComponent
                        key={product.id}
                        product={product}
                        onDelete={deleteProduct}
                        onEdit={editProduct}
                    />
                ))}
            </div>
            <button className="btn btn-primary my-4" onClick={addProduct}>Add Product</button>
        </div>
    );
}

export default App;
