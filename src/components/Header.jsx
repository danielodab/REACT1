import './Header.css'
function Header () {
    return (
        <>
            <div className="Header Container">
                <img src='https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg'></img>
                <nav>
                    <ul className='Header-Menu'>
                        <li>
                            <a href=''>Bicicletas</a>
                        </li>
                        <li>
                            <a href=''>Seguros</a>
                        </li>
                        <li>
                        <a href=''>Contato</a>
                        </li>
                    </ul>

                </nav>

            </div>
        
        </>
    )
}

export default Header