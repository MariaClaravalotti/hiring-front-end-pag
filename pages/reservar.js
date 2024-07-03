








export default function Reservado(){
    return(
        <body>
            <section class="seçao">
                <img  class="hb20" src="hb20.png"/>

                <figure>Hb20 é uma otima escolha pois possui controle de estabilidade, airbags laterais, cinto de segurança de três pontas e uma estrutura robusta que garante bastante solidez nas curvas em toda a sua gama de modelos</figure>
                <figcaption>$120/DIA</figcaption>
                <p>Retirada dia 05/07/2024 ás 12:00</p>
            </section>


        <h1>Formulario de Reserva</h1>
        <forms class="formulario">
        <label for="name">NOME</label>
           <input type="text" id="name"/>

           <label for="email">E-mail</label>
           <input type="email" id="email"/> 

           <label for="password">SENHA</label>
           <input type="password" id="password"/>

           <label for="">NAOME</label>
           <input type="text" id="name"/>
           
           <label for="message">Mensagem</label>
           <textarea name="message" id="message"></textarea>

           <button class="botão" type="submit">Enviar</button>
        </forms>
        </body>
    )
}