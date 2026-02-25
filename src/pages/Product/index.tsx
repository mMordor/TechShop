import { useParams } from "react-router-dom"
import style from "./Product.module.scss"
import { useEffect, useState } from "react";
import type { product } from "../../types";
import { FaStar } from "react-icons/fa6";
import CustomButton from "../../Components/CustomButton";
import { getProductById } from "../../services";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../redux/reducers/CartReducer";
import type { AppDispatch, RootState } from "../../redux/store";

function Product() {
  const parm = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const [product, setProduct] = useState<product>()
  const cart = useSelector((state:RootState)=>state.cartReducer)
  console.log(cart)
  const auth = useSelector((state:RootState)=>state.authReducer)
  useEffect(() => {
    getProductById(parm.id).then(res => setProduct(res))
  }, [])


  const clickHandle = ()=>{
    if(auth.userId != null){
      dispatch(cartActions.addToCart(product))
    }else{
      alert("you must Log in first")
    }
  }

  return (
    <div className={style.container}>

      <div className={style.productinf}>
        <div className={style.img}>
          <img src={product?.thumbnail} alt="" />
        </div>
        <div className={style.inf}>
          <h2>
            {product?.title}
          </h2>
          <p>
            {product?.description}
          </p>
          <span>
            <h4>
              {product?.price} T
            </h4>
            <span>
              {product?.rating} <FaStar size={25} color="orange"/> 
            </span>
          </span>
          <CustomButton varient="primery" text="Add to Cart" onClick={()=>{clickHandle()}}/>
        </div>
        
      </div>

      <div className={style.comments}>

      </div>

    </div>
  )
}

export default Product