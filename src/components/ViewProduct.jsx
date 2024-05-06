
import React from 'react';
import Footer from './Footer';
import './ViewProduct.css'; 
import One from './assets/rating_starts.png'

const ViewProduct = () => {
    const ItemImage = sessionStorage.getItem('Image');
    const ItemName = sessionStorage.getItem('Name');
    const ItemDescription = sessionStorage.getItem('Description');
    const ItemPrice = sessionStorage.getItem('Price');

    return (
        <>
            <div className="product-container">
                <div className="image-container">
                    <img src={ItemImage} width={500} height={300} alt="" />
                </div>
                <div className="details-container">
                    <p className="name">{ItemName}</p> <br />
                    <p className="description">{ItemDescription}</p> <br />
                    <p className="price">Rs.{ItemPrice} /-</p>
                    <p><img src={One} alt="" /></p>
                   <button>Buynow</button>
                  
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ViewProduct;

