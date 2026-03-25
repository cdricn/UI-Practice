import styles from './logo.module.css';

export default function Logo() {
  return (
    <div className={styles['text-logo']}>
      <span>Header</span>
      <span>Middletitle</span>
      <span>Bottom</span>
    </div>
  )
}