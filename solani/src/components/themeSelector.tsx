import styles from './themeSelector.module.css';

export default function ThemeSelector() {
  return (
    <div className={styles['selector-container']}>
      <span>Light</span>
      <span> / </span>
      <span>Dark</span>
    </div>
  )
}