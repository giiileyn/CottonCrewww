import React, { useContext } from 'react'
import { HomeContext } from '../Context/HomeContext'
import {useParams} from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import DisplayProduct from '../Components/DisplayProduct/DisplayProduct';
import Description from '../Components/Description/Description';
import Relatedprod from '../Components/Relatedprod/Relatedprod';

const Products = () => {
  const {all_product} = useContext(HomeContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId))

  return (
    <div>
      <Breadcrum product = {product} />
      <DisplayProduct product = {product} />
      <Description/>
      <Relatedprod />
    </div>
  )
}

export default Products
