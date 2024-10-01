import styles from './Container.module.css';

interface IContainerProps {
    children: React.ReactNode
  }

export default function Container  ({children}:IContainerProps):JSX.Element  {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}
