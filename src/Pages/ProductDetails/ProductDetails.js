import './ProductDetails.css'
import React from 'react';
import Rating from "react-rating";

const ProductDetails = () => {
    return (
        <div className='container row mx-auto'>
            <div className="col-md-6  ">
                <img src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__480.jpg" alt="" className='d-block p-2' />
            </div>
            <div className="col-md-6  ">
                <div>
                    <h3>Grilled Zucchini and Barley Salad</h3>
                    <small>with <b><i>Garlic Costinies</i></b></small>
                </div>
                <div className='p-2'>
                    <Rating
                        initialRating={4.5}
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star "
                        className="text-warning d-block py-2"
                        readonly
                    ></Rating>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, suscipit. Nesciunt esse, vel impedit dicta commodi ipsum beatae ex deleniti placeat voluptatem maxime explicabo excepturi magni harum temporibus asperiores. Quam tempora neque in tenetur commodi molestias ipsum illo impedit aperiam, molestiae beatae dolore voluptas, dicta ipsa omnis sed inventore nam.</p>

                </div>
                <div className='d-flex '>
                    <h6 className='me-5'>Price</h6>
                    <h6 className='ms-5'>250$</h6>

                </div>
                <div className='mt-2'>
                    <button className='btn btn-danger w-75 d-block mx-auto py-2'>Add To Cart</button>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;