import style from './Loading.module.scss'
import { ImSpinner2 } from "react-icons/im";

function Loading() {
  return (
    <div className={style.wraper}><ImSpinner2 size={50} className={style.anim}/></div>
  )
}

export default Loading