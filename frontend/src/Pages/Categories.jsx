import React, { useContext } from 'react'
import './Css/Categories.css'
import { HomeContext } from '../Context/HomeContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const Categories = (props) => {
  const {all_product} = useContext(HomeContext);
  return (
    <div className="category">
      <img className='category-banner' src={props.banner} alt="" />
      <div className="category-index-sort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="category-sort">
          Srt by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="category-products">
        {all_product.map((item, i)=>{
          if (props.category===item.category){
            return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else {
            return null;
          }
        })}
      </div>
    </div>
  )
}

export default Categories
