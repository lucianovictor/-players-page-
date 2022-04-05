import styles from './styles.module.scss'

interface HeaderProps {
  lastName: string
}

export const Header = ({ lastName }: HeaderProps) => {
  const handleFirtsCharAt = () => {
    return lastName.charAt(0)
  }

  return (
    <header className={styles.container}>
      <strong>{handleFirtsCharAt()}</strong>
      <button type="button">
        <span />
        <span />
      </button>
    </header>
  )
}
