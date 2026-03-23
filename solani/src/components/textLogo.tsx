import styles from './TextLogo.module.css';

export default function TextLogo() {
  return (
    <h1 className={styles['page-title']}>
      <span>Header</span>
      <span>Middletitle</span>
      <span>Bottom</span>
    </h1>
  )
}