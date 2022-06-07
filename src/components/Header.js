import logo from '../assets/logo.png'

export default function Header() {
    return (
        <header className='header'>
            <img src={logo} alt="logo" width={28} />
            <h1 className='header__title'>Photo Gallery</h1>
            <p className='header__text'>some small photo collection of Natalia</p>
        </header>
    )
}
