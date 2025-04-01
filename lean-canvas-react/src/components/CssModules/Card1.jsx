// 일반적인 CSS
// import './Card1.css';
// export default function Card1() {
//     return <article className="card">Card1</article>;
//   }

// CSS Module
import styles from './Card1.module.css';

export default function Card1() {
  return <article className={styles.card}>Card1</article>;
}
