import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Shop() {
  
    useEffect(() => {
        fetchItems();
    },[])

    const [items, setItems] = useState([]);
    
    const fetchItems = async () => {
        const data = await fetch('https://fakestoreapi.com/products?limit=5');
        
        const items = await data.json();

        console.log(items);

        setItems(items);
    }

    return (
        <div>
            <h1>Shop Page</h1>
            {items.map(item => (
                <h2 key={item.id} >
                    <Link to={`/shop/${item.id}`} >
                        {item.title}
                    </Link>
                </h2>
            ))}
        </div>
    );
}

export default Shop;
