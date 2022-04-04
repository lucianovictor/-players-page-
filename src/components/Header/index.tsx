import styles from './styles.module.scss'

interface HeaderProps {
  playerName: string
}

export const Header = ({ playerName }: HeaderProps) => {
  const handleLastNameAndFirtsCharAt = () => {
    const lastName = playerName.split(' ')[1]

    return lastName.charAt(0)
  }

  return (
    <header className={styles.container}>
      <strong>{handleLastNameAndFirtsCharAt()}</strong>
      <button type="button">
        <span />
        <span />
      </button>
    </header>
  )
}
