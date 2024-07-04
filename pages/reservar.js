import React, {useState} from "react";


export default function Reservado() {

        return(
            <>
                <section class="seçao">
                <img class="hb20" src="hb20.png" />

                <figure class="fig">Hb20 é uma otima escolha pois possui controle de estabilidade, airbags laterais, cinto de segurança de três pontas e uma estrutura robusta que garante bastante solidez nas curvas em toda a sua gama de modelos</figure>
                <figcaption>$120/DIA</figcaption>
                <p>Retirada dia 05/07/2024 ás 12:00*</p>

                <h1>Formulario para Reserva</h1>
            </section>
            
            <forms class= "formulario">
                <div>
                <label for="name">NOME</label>
                <input  type="text" id="name"/>
                
                </div>
                 
                 <div>
                <label for="email">E-mail</label>
                <input
                
                type="email" id="email"
                />
                </div>

                <div>
                <label for="password">SENHA</label>
                <input
                 type="password" id="password"
                 />
                 </div>

                <div>
                <label for="number">Telefone</label>
                <input type="number" id="number"
                />
                </div>
                
                <div>
                <label 
                for="message">Mensagem</label>
                <textarea name="message" id="message"></textarea>

                <button class="botão" type="submit">Enviar</button>
                </div>
            </forms>
            </>
        )
}