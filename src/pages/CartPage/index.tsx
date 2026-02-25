import { useSelector } from 'react-redux'
import type { RootState } from '../../redux/store'
import CartListComp from '../../Components/CartListComp'
import type { Icart } from '../../types'
import CustomButton from '../../Components/CustomButton'


function CartPage() {
  const cart = useSelector((state: RootState) => { return state.cartReducer })
    
  function getSum(list : Icart[]):number{
    let sum :number = 0;
     list.map((item)=>{
      return sum += item.product.price * item.quantity
    })
    return sum;
  }
  return (
    <div className={"wraper w-full h-[90vh] flex justify-center items-center"}>
      <div className={"w-full h-125 flex flex-col sm:flex-row gap-4 justify-around p-4"}>

        <div className='w-full sm:w-[68%] h-full bg-white rounded-md shadow-md overflow-hidden'>

          <div className='h-[25%] sm:h-[15%] bg-[#6abcff] text-white grid grid-cols-[2fr_1fr_1fr_1fr] p-4 font-bold '>
            <span className='pl-4'><h2 className='text-2xl'>Products</h2></span>
            <span className='flex items-center'>Price</span>
            <span className='flex items-center'>Quantity</span>
            <span className='flex items-center'>Total Price</span>
          </div>

          <div className='h-[78%]'>

            {
              cart.length > 0 ?  
              cart.map(item => (
                <CartListComp item={item}/>
              ))
              :
              <div className='w-full h-full flex justify-center items-center'>Your Cart is Empty</div>
            }
          
          </div>
        
        </div>



        <div className='w-full sm:w-[28%] bg-white rounded-md shadow-md flex flex-col justify-center items-center'>
            
            <div className=' h-[50%] flex flex-col justify-center items-center text-[#76b1ffb9]'>
              <h1 className='text-4xl'>
                {getSum(cart)} T
              </h1>
              <h1 className='text-2xl'>
                Total Cost
              </h1>
            </div>

            <div className='w-full flex justify-start p-4'>
              <CustomButton  varient='primery' text='Buy' onClick={()=>{}}/>
            </div>

        </div>
      </div>

    </div>

  )
}

export default CartPage