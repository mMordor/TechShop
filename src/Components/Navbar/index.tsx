import style from "./Navbar.module.scss"
import logo from "../../assets/—Pngtree—technology shop logo designs online_5301621.png"
import { FaCartShopping } from "react-icons/fa6";
import { RiLoginBoxFill,RiLogoutBoxLine } from "react-icons/ri";
import {  } from "react-icons/ri";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store";
import { authActions } from "../../redux/reducers/AuthReducer";

function Navbar() {
  
  const cart = useSelector((state:RootState)=>state.cartReducer)
  const auth = useSelector((state:RootState)=>state.authReducer)
  const dispatch = useDispatch<AppDispatch>();
  

  return (
    <div className={style.nav}>

      <img src={logo} alt="" />

      <div>
        <ul>
          <li>
            <Link className={style.link} to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className={style.link} to={"/about_site"}>
              About Site
            </Link>
          </li>
        </ul>
      </div>

      {
        auth.userId ?
          (<div className={style.usersOptions}>
            <div className={style.cart}>
              <Link to={"/cart"} style={{cursor:"pointer",textDecoration:"none"}} className={style.usersOptions}>
                <FaCartShopping size={23} />
                <span className={style.counter}>
                  {cart && cart.length < 1 ? 0 : cart?.reduce((sum , item)=>sum + item.quantity,0)}
                </span>
              </Link>
            </div>
            
              <RiLogoutBoxLine size={23} onClick={()=>{dispatch(authActions.logout())}} style={{cursor:"pointer",textDecoration:"none"}} />
            
          </div>)
          :
          (
            <div className={style.usersOptions}>
              <Link to={"/login"} style={{cursor:"pointer",textDecoration:"none"}} className={style.usersOptions}>
                <RiLoginBoxFill size={27} />
              </Link>
            </div>
          )
      }


    </div>
  )
}

export default Navbar