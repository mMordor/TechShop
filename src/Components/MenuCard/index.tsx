import { Link } from 'react-router-dom'
import style from './MenuCard.module.scss'

function MenuCard({ title, thumbnail }: { title: string, thumbnail: string }) {
  return (
    <Link to={`/collections/${title}`} className={style.menuCard} >
      <img className={style.thumbnailCard} src={thumbnail} />
      <div className={style.titleCard}>
        {title}
      </div>
    </Link>
  )
}

export default MenuCard