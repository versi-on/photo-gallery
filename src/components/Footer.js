import logo from '../assets/logo.png'

export default function Header() {
    const currentYear = new Date().getFullYear()
    return (
        <footer className='footer'>
            {/* ©  */}
            <p><img src={logo} alt="logo" width={11} /> {currentYear}
                <span className='footer__text'> ON</span>atalia
            </p>
        </footer>
    )
}
