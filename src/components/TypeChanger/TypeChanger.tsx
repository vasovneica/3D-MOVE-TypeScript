import { Link } from 'react-router-dom';
import style from './TypeChanger.module.css';

type TypeChangerProps = {
  postQuery: string
}

const TypeChanger = ({ postQuery }: TypeChangerProps): JSX.Element => {
  return (
    <div className={style.type_changer}>

      <h3 className={style.type_changer_header}>Types</h3>
      <Link
        className={postQuery === 'all' ? `${style.type_link_active}` : `${style.type_link}`}
        to={`?sort=${'all'}&page=${'1'}`
        }>All</Link>

      <Link
        className={postQuery === 'car' ? `${style.type_link_active}` : `${style.type_link}`}
        to={`?sort=${'car'}&page=${'1'}`}
      >Car</Link>

      <Link
        className={postQuery === 'air' ? `${style.type_link_active}` : `${style.type_link}`}
        to={`?sort=${'air'}&page=${'1'}`}
      >Air</Link>

      <Link
        className={postQuery === 'other' ? `${style.type_link_active}` : `${style.type_link}`}
        to={`?sort=${'other'}&page=${'1'}`}
      >Parts</Link>

    </div>
  )
}
export default TypeChanger;