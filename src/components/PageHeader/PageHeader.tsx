import styles from './PageHeader.module.css';

interface IPageHeader {
  children: JSX.Element[];
}

export default function PageHeader({ children }: IPageHeader): JSX.Element {
  return (
    <div className={styles.page_header} >
      {children}
    </div>
  );
}
