import { useParams } from 'react-router-dom'
import style from './Collections.module.scss'
import { useEffect, useState } from 'react';
import type { product } from '../../types';
import ProductCard from '../../Components/ProductCard';
import { getProductsByCategories } from '../../services';

function Collections() {

    

    const param = useParams();
    const request = param.category;
    const [products , setProducts] = useState<product[]>([])

    useEffect(
        ()=>{
            getProductsByCategories(request)
            .then(
                res => setProducts(res.products)
            )
            
        },[]
    )
  return (
    <div className={style.wraper}>
        {
            products.map((item)=>(
                <ProductCard p={item} key={item.id*5}/>
            ))
        }
    </div>
  )
}

export default Collections