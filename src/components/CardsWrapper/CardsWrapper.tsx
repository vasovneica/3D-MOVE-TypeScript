import styles from './CardsWrapper.module.css';

interface ICardsWrapperProps {
    children: React.ReactNode
}

export default function CardsWrapper  ({children}:ICardsWrapperProps):JSX.Element  {
  return (
    <div className={styles.cards_wrapper}>
      {children}
    </div>
  );
}