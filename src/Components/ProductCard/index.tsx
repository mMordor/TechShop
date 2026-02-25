import type { product } from '../../types'
import { FaStar } from "react-icons/fa6";
import style from './ProductCard.module.scss'
import { Link } from 'react-router-dom';

function ProductCard({p}:{p:product}) {
  return (
    <Link to={`/product/${p.id}`} className={style.container}>
        <div className={style.img}>
            <img src={p.thumbnail} alt="" />
        </div>
        <div className={style.content}>
            <h4>{p.title}</h4>
            <div>
                <p>{p.description}</p>
            </div>
        </div>
        <div className={style.numbs}>
            <h4 >{p.price} T</h4>
            <span>{p.rating} <FaStar color="orange"/> </span>
        </div>
    </Link>
  )
}

export default ProductCard