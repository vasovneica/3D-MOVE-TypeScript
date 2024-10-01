import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import LoaderGradient from '../loaderGradient/LoaderGradient.tsx';
import style from './ModelCard.module.css';

export interface IModelCard {
  _id?: number
  key?: number
  img: string
  title: string
  description: string
  hrefTo: string
  faces?: number
}

const ModelCard: FC<IModelCard> = ({ img, title, description, hrefTo }): JSX.Element => {

  const [loadedImg, setLoadedImg] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const image = new Image();
    image.src = img;
    image.onload = () => {
      setLoadedImg(true)
    }
    image.onerror = () => {
      setError(true);
    }
  }, [img, title]);

  return (
    <div className={style.card} >
      <Link className={style.card_link} to={hrefTo}>

        {!loadedImg && !error
          ? <LoaderGradient /> : (!error ? <img className={style.card_img} src={img} /> : <LoaderGradient />)
        }

        <h3 className={style.card_title}>{title}</h3>
        <p>{description}</p>
      </Link>
    </div>
  )
}

export default ModelCard;
