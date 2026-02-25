import { useDispatch } from 'react-redux'
import type { Icart } from '../../types'
import CustomButton from '../CustomButton'
import type { AppDispatch } from '../../redux/store'
import { cartActions } from '../../redux/reducers/CartReducer'

function CartListComp({ item }: { item: Icart }) {
    const dispatch = useDispatch<AppDispatch>()

    return (
        <div className=' grid grid-cols-[2fr_1fr_1fr_1fr] p-4 border-b border-[#8d8d8d91]'>
            <span className=' font-bold' >{item.product.title}</span>
            <span >{item.product.price} T</span>
            <span className='flex gap-1' >
                <CustomButton onClick={()=>{dispatch(cartActions.decraceQuantity(item.product))}} text='-' varient='mini'/>
                 {item.quantity} 
                <CustomButton onClick={()=>{dispatch(cartActions.addToCart(item.product))}} text='+' varient='mini'/></span>
            <span >{item.quantity * item.product.price} T</span>
        </div>

    )
}

export default CartListComp