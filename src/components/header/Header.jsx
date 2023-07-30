import LightIcon from "../../data/icons/LightIcon"
import Logo from "../../data/icons/Logo"
import style from './Header.module.scss'


const Header = () => {
  return (
    <header className={style.header}>
        <Logo />
        <button> <LightIcon /> </button>
    </header>
  )
}

export default Header