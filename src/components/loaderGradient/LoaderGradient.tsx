import style from './LoaderGradient.module.css';


export default function LoaderGradient():JSX.Element {
  return (

    <div className={`${style.loader} ${style.loader_square} `}
      style={{
        fontSize: '2rem',
        cursor: 'pointer'
      }}
    ></div>
  )
}
