import style from './PageWrapper.module.css'

type Props = {
    children:JSX.Element[]
  }

const PageWrapper = ({children} : Props):JSX.Element  => {
  return (
    <article className={style.page_wrapper}>
        {children}
    </article>
  )
}

export default PageWrapper