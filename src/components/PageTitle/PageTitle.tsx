import styles from './PageTitle.module.css';

export interface IPageTitleProps {
  children: string
}

export default function PageTitle({ children }: IPageTitleProps): JSX.Element {
  return (
    <h2 className={styles.page_title}>{children}</h2>
  );
}
