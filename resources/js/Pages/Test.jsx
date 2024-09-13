import React, { useState, useEffect } from 'react';
import BaseLayout from '../Layouts/BaseLayout'

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const fetchProducts = async () => {
            try {
              const response = await fetch('/');
              const data =  await response.json()
              console.log(data)
              return data;

            } catch (error) {
              console.log(error);
            }
        }

        fetchProducts().then(data =>  setProducts(data));
    }, []);

    console.log(products);

    let productList = [];

    products.forEach((product, index) => {
        productList.push(
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={product.image} alt="Post Image" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                        <a href="#" className="text-blue-500 hover:underline">See Details</a>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="flex flex-wrap -mx-4">
            {productList}
        </div>
    )
}

Home.layout = page => <BaseLayout children={page}/>

export default Home
