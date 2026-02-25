import style from './CustomButton.module.scss'

function CustomButton({varient,text,onClick}:{varient:"primery" | "secondery " | "submit" | "mini", text:string,onClick:()=>void}) {
    // function onClick(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
    //     throw new Error('Function not implemented.')
    // }

  return (
    varient === "mini" ?
        <button className={style.btn3} onClick={()=>onClick()}>
            {text}
        </button>
    :varient === "submit" ?
        <input type='submit' title={text} className={style.btn1} />
    : varient === "primery" ?
        <button className={style.btn1} onClick={()=>onClick()}>
            {text}
        </button>
    :
        <button className={style.btn2} onClick={()=>onClick()}>
            {text}
        </button>
  )
}

export default CustomButton