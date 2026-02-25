import MenuCard from '../../Components/MenuCard'
import style from './HomePage.module.scss'

function HomePage() {
  const menu_items_list = [
    { id: 1, title: "laptops", thumbnail: "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/thumbnail.webp" },
    { id: 2, title: "smartphones", thumbnail: "https://cdn.dummyjson.com/product-images/smartphones/realme-x/thumbnail.webp" },
    { id: 3, title: "mobile-accessories", thumbnail: "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/thumbnail.webp" },
    { id: 4, title: "tablets", thumbnail: "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/thumbnail.webp" },
  ]
  return (
    <>
      <div className={style.container}>
        {
          menu_items_list.map((item) => (

            <MenuCard title={item.title} thumbnail={item.thumbnail} key={item.id * 12} />
            
          ))
        }
      </div>  
    </>
  )
}


export default HomePage
