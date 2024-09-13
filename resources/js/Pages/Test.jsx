import React, { useState, useEffect } from 'react';
import BaseLayout from '../Layouts/BaseLayout'

 const productsURL = '/products';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch(productsURL);
                const jsonData = await response.json();
                return jsonData;
              } catch (error) {
                console.error('Error fetching data:', error);
              }
         }
         getProducts().then(res=>setData(res));
      }, []);

    console.log(data);

    // return (
    //     <div className="flex flex-wrap -mx-4">
    //         <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
    //             <div className="bg-white rounded-lg shadow-md overflow-hidden">
    //                 <img src="https://placehold.co/600x400" alt="Post Image" className="w-full h-48 object-cover" />
    //                 <div className="p-4">
    //                     <h2 className="text-xl font-semibold mb-2">Item Title 1</h2>
    //                     <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis.</p>
    //                     <a href="#" className="text-blue-500 hover:underline">See Details</a>
    //                 </div>
    //             </div>
    //         </div>


    //         <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
    //             <div className="bg-white rounded-lg shadow-md overflow-hidden">
    //                 <img src="https://placehold.co/600x400" alt="Post Image" className="w-full h-48 object-cover" />
    //                 <div className="p-4">
    //                     <h2 className="text-xl font-semibold mb-2">Item Title 2</h2>
    //                     <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis.</p>
    //                     <a href="#" className="text-blue-500 hover:underline">See Details</a>
    //                 </div>
    //             </div>
    //         </div>


    //         <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
    //             <div className="bg-white rounded-lg shadow-md overflow-hidden">
    //                 <img src="https://placehold.co/600x400" alt="Post Image" className="w-full h-48 object-cover" />
    //                 <div className="p-4">
    //                     <h2 className="text-xl font-semibold mb-2">Item Title 3</h2>
    //                     <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis.</p>
    //                     <a href="#" className="text-blue-500 hover:underline">See Details</a>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
}

Home.layout = page => <BaseLayout children={page}/>

export default Home
