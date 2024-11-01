import React, { useContext } from 'react'
import './DisplayProduct.css'
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { HomeContext } from '../../Context/HomeContext';


const DisplayProduct = (props) => {
    const {product} = props;
    const {addToCart} = useContext(HomeContext);
  return (
    <div className="displayproduct">
        <div className="displayproduct-left">
            <div className="displayproduct-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="displayproduct-img">
                <img className ='displayproduct-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="displayproduct-right">
            <h1>{product.name}</h1>
            <div className="displayproduct-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="displayproduct-prices">
                <div className="price-old">${product.old_price}</div>
                <div className="price-new">${product.new_price}</div>
            </div>
            <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perferendis modi suscipit voluptatum a ut nulla debitis, architecto repudiandae dolore sunt illo nihil laboriosam quos voluptatem consequuntur nemo, reprehenderit fugit. Similique ea maiores, adipisci sit delectus exercitationem doloribus repellat ipsum nobis a rem et quo quidem ut cumque libero ipsam!
            </div>
            <div className="size">
                <h1>Select Size</h1>
                <div className="sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
            <p className="category"><span>Category :</span>Women, T-shirt, Croptop</p>
            <p className="category"><span>Tags :</span>Modern, Latest</p>
        </div>
    </div>
  )
}

export default DisplayProduct
