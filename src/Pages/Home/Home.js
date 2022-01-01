import React from 'react';
import Banner from './Banner';
import Food from './Food';
import Hungry from './Hungry';
import NearFood from './NearFood';
import Others from './Others';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NearFood></NearFood>
            <Hungry></Hungry>
            <Food></Food>
            <Others></Others>
        </div>
    );
};

export default Home;