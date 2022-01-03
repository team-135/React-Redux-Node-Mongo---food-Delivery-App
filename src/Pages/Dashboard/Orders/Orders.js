import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Orders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    return (
        <div>
            <h1>orders pages</h1>
        </div>
    );
};

export default Orders;