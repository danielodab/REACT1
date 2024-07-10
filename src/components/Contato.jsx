import './Contato.css'
import '../pages/pgContato'
function Contato () {


    return (
        <>
            <main className='mainContato'>
                <div className='tituloContato'>
                    <div className='titulo'>
                        <p className='p-titulo'>RESPOSTAS EM ATÉ 24H</p>
                        <h1 className='h1-titulo'>
                            nosso contato
                            <span className='h1-ponto'>.</span>
                        </h1>
                    </div>
                </div>

                <div className='contato conteiner'>
                    <section className='contato-dados'>
                        <h2 className='h2-contato-dados'>Loja Online</h2>
                        <div className='endereco-contato-dados'>
                            <p>Rua Ali Perto, 35</p>
                            <p>Rio de Janeiro - RJ</p>
                            <p>Brasil - Terra - Vita Láctea</p>
                        </div>
                        <address className='contato-contato-dados'>
                            <a className='a1' href="mailto:contato@bikcraft.com">contato@bikcraft.com</a>
                            <a className='a2' href="mailto:assistencia@bikcraft.com">assistencia@bikcraft.com</a>
                            <a className='a3' href="tel:+552199999999">+55 21 9999-9999</a>
                        </address>
                        <div className='redes-contato-dados'>
                        <a>
                            <img src="https://www.origamid.com/projetos/bikcraft/img/redes/instagram-p.svg" alt="Instagram"></img>
                        </a>
                        <a>
                            <img src="https://www.origamid.com/projetos/bikcraft/img/redes/facebook-p.svg" alt="Facebook"></img>
                        </a>

                        <a>
                            <img src="https://www.origamid.com/projetos/bikcraft/img/redes/youtube-p.svg" alt="Youtube"></img>
                        </a>
                        </div>

                    </section>

                    <section className='contato-formulario'>
                        <form className='form'>
                            <div className='nome-formulario'>
                                <label for="nome">Nome</label>
                                <input type="text" id="nome" name="nome" placeholder="Seu nome"></input>
                            </div>
                            <div className='telefone-formulario'>
                                <label for="telefone">Telefone</label>
                                <input type="text" id="telefone" name="telefone" placeholder="(21) 9999-9999"></input>
                            </div>
                            <div className='email-formulario'>
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="contato@email.com"></input>
                            </div>
                            <div className='mensagem-formulario'>
                                <label for="mensagem">Mensagem</label>
                                <textarea rows="5" id="mensagem" name="mensagem" placeholder="O que você precisa?"></textarea>
                            </div>
                            <button class="botao-form">Enviar Mensagem</button>
                        </form>
                    </section>

                </div>
            </main>
        </>
    )
}

export default Contato