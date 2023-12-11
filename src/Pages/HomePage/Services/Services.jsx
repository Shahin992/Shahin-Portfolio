/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";


const Services = () => {
    const [services,setServices] = useState([])
   
    useEffect(() => {
        fetch(' http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                console.log(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    
    return (
        <div className="max-w-[1100px] mx-auto my-10">
            <div >
            <h1 className=" text-3xl font-semibold mb-3">Working Area</h1>
            <p className=" text-4xl font-medium text-gray-400 mb-10">WHAT I ACTUALLY DO</p>
            </div>
            <div className="grid grid-cols-3 gap-5">
          {
            services.map(data=> <div>
                <div>
          <div className="flex flex-col  items-center bg-gray-50 rounded-2xl p-3 border-2 h-[400px]">
            <div className="h-10">
                <img src={data.image} alt="" />

            </div>
            <div className="">
            <h1  className="text-xl text-center font-bold mb-5">{data.title}</h1>
            <p className="text-xl text-center font-bold">{data.description}</p>
            </div>
            
            
            </div>

            
          </div>
            </div>)
          }
          </div>
            
            
        </div>
    );
};

export default Services;