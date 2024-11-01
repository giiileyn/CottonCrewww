import React, { useContext } from 'react'
import './CartItems.css'
import { HomeContext } from '../../Context/HomeContext'
import remove_icon from '../Assets/cross_icon.png'
const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItems, removeFromCart} = useContext(HomeContext);
      return (
    <div className="cart_items">
        <div className="cart_items-formatmain">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>

        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return <div>
                        <div className="cart_items-format cart_items-formatmain">
                            <img src= {e.image}alt="" classname='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>₱{e.new_price}</p>
                            <button className="cart_items-quantity">{cartItems[e.id]}</button>
                            <p>₱{e.new_price * cartItems[e.id]}</p>
                            <img className='cartitems-removeicon' src={remove_icon} onclick={()=>{removeFromCart(e.id)}} alt="" />
                        </div>
                    <hr />
                </div>     
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="total-item">
                        <p>Subtotal</p>
                        <p>₱{getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="total-item">
                        <h3>Total</h3>
                        <h3>₱{getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>Checkout</button>
            </div>
            <div className="promocode">
                <p>if u have a promocode anu man</p>
                <div className="promobox">
                    <input type="text" placeholder='promo code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems
