import './Footer.css'

function Footer() {
    return (
        <>
            <div className="Footer Container">
               <img src='https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg'></img>

               <div className='footer-contato'>
                    <h3 className='font-h3'>Contato</h3>
                    <ul className='font-h3-ul'>
                        <li><a href='tel: +5521999999999'>+55 21 99999-99990</a></li>
                        <li><a href='mailto:contato@bikcraft.com'>contato@bikcraft.com</a></li>
                        <li> Rua Ali Perto, 42 - Botafogo</li>
                        <li>Rio de Janeiro - RJ</li>
                    </ul>
                    <div className='footer-redes'>
                        <a>
                            <img src='https://www.origamid.com/projetos/bikcraft/img/redes/instagram.svg' alt='Instagram'></img>
                        </a>
                        <a>
                            <img src='https://www.origamid.com/projetos/bikcraft/img/redes/facebook.svg' alt='Facebook'></img>
                        </a>
                        <a>
                            <img src='https://www.origamid.com/projetos/bikcraft/img/redes/youtube.svg' alt='YouTube'></img>
                        </a>
                    </div>
               </div>

               <div className='footer-informacoes'>
                    <h3 className='font-h3'>Informações</h3>
                    <nav className='nav-informacoes'>
                        <ul>
                            <li>
                                <a href=''>Bicicletas</a>
                            </li>
                            <li>
                                <a href=''>Seguros</a>
                            </li>
                            <li>
                                <a href=''>Contato</a>
                            </li>
                            <li>
                                <a href=''>Termos e Condições</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <p class="footer-direitos">Bikcraft © Alguns direitos reservados.</p>
                
            </div>

        </>
    )
}

export default Footer
