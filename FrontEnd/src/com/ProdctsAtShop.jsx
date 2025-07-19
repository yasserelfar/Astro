import  { useState, useEffect } from 'react';
import "./Home.css";
import Shop from "./Shop";
import productsData from "./products.json";

function ProdctsAtShop() {
    const [output, setOutput] = useState([]);

    useEffect(() => {
        
        setOutput(productsData);
    }, []);

    return (
        <>
            {output.map((item, index) => (
                <Shop key={index} img={item.img} name={item.name} prand={item.prand} price={item.price} />
            ))}
        </>
    );
}

export default ProdctsAtShop;
