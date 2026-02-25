import { useForm,type SubmitHandler } from 'react-hook-form'
import style from './LoginPage.module.scss'
import type { Inputs } from '../../types'
import CustomButton from '../../Components/CustomButton'
import { useDispatch, useSelector } from 'react-redux'
import { LoginIn } from '../../redux/reducers/AuthReducer'
import type { AppDispatch, RootState } from '../../redux/store'
import Loading from '../../Components/Loading'
import { Navigate } from 'react-router-dom'

function LoginPage() {
    const {register,handleSubmit,formState:{errors}} = useForm<Inputs>()
    const dispatch = useDispatch<AppDispatch>();
    const auth = useSelector((state: RootState) => state.authReducer);
    const onSubmit : SubmitHandler<Inputs> = (data)=>{
        console.log(data)
        dispatch(LoginIn({username:data.username,password:data.password}));
       
    }

  return (
    auth.loading ?
     
        <Loading />
    
    :auth.userId ? 

        <Navigate to={"/"}/>

    :   
        <div className={style.wraper}>
            <div className={style.container}>
                <h1>LogIn</h1>
                <div className={style.form}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            {errors.username && <p>This field is required</p>}
                            <input type="text" {...register('username',{required:true})} />
                        </div>
                        <div>
                            {errors.password && <p>This field is required</p>}
                            <input type="password" {...register('password',{required:true})} />
                        </div>
                        <p>{auth.error}</p>
                        <CustomButton varient='submit' text='submit' onClick={()=>{}}/>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default LoginPage