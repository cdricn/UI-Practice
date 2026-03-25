import styles from './textLogo.module.css';

export default function TextLogo() {
  return (
    <div className={styles['text-logo']}>
      <span>Header</span>
      <span>Middletitle</span>
      <span>Bottom</span>
    </div>
  )
}