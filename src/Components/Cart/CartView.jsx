import React from 'react';
import { useParams } from 'react-router-dom';


const CartView = () => {

    const {id}=useParams();
    console.log(id);
    return (
        <div>
            
        </div>
    );
};

export default CartView;