import React, { useState , useEffect} from 'react';
import BaseLayout from '../Layouts/BaseLayout'

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error('Response not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                console.error(err)
            }
        }
        fetchData();
    }, []);
    console.log({products})
    return (
        <div className="flex flex-wrap -mx-4">
            {products && products.map(p => {
                return (
                    <div className="w-full sm:w-1/2 lg:w-1/3 p-4" key={p.id}>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src={p.image} alt="Post Image" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
                                <p className="text-gray-600 text-sm mb-4">{p.description}</p>
                                <a href="#" className="text-blue-500 hover:underline">See Details</a>
                            </div>
                        </div>
                    </div>
                )
            })}
            {/* <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="https://placehold.co/600x400" alt="Post Image" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">Item Title 1</h2>
                        <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis.</p>
                        <a href="#" className="text-blue-500 hover:underline">See Details</a>
                    </div>
                </div>
            </div>


            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="https://placehold.co/600x400" alt="Post Image" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">Item Title 2</h2>
                        <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis.</p>
                        <a href="#" className="text-blue-500 hover:underline">See Details</a>
                    </div>
                </div>
            </div>


            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="https://placehold.co/600x400" alt="Post Image" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">Item Title 3</h2>
                        <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis.</p>
                        <a href="#" className="text-blue-500 hover:underline">See Details</a>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

Home.layout = page => <BaseLayout children={page}/>

export default Home
