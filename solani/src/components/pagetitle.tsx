import styles from './pagetitle.module.css';

export default function PageTitle() {
  return (
    <h1 className={styles['page-title']}>
      <span>Header</span>
      <span>Middletitle</span>
      <span>Bottom</span>
    </h1>
  )
}