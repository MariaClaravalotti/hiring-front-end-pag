import { useState } from 'react';

const MyForm = () => {
   
    const [values, setValues] = useState({
        name: '',
        email: '',
        message: '',
        telefone:''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const validate = () => {
        let errors = {};

        if (!values.name.trim()) {
            errors.name = 'Nome é obrigatório';
        }

        if (!values.email.trim()) {
            errors.email = 'E-mail é obrigatório';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'E-mail inválido';
        }

        if (!values.message.trim()) {
            errors.message = 'Mensagem é obrigatória';
        }
        
          
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length === 0) {

            console.log('Dados do formulário:', values);

            setValues({
                name: '',
                email: '',
                message: '',
                number:''
            });
            
            setErrors({});
        } 
        
        
        else {
            setErrors(validationErrors);
        }
    };
    
    return (
        <>
            <cabecario>
            <img class="hb20" src="hb20.png" />

            <figure class="fig">Hb20 é uma otima escolha pois possui controle de estabilidade, airbags laterais, cinto de segurança de três pontas e uma estrutura robusta que garante bastante solidez nas curvas em toda a sua gama de modelos</figure>
            <figcaption>$120/DIA</figcaption>
            <p>Retirada dia 05/07/2024 ás 12:00*</p>

            <h1>Formulario para Reserva</h1>
            </cabecario>
            <form onSubmit={handleSubmit} class="Formulario">
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                    />
                    {errors.name && <div className="error">{errors.name}</div>}
                </div>
                <div>
                    <label>Telefone</label>
                    <input
                        type="number"
                        name="telefone"
                        value={values.telefone}
                        onChange={handleChange}
                    />
                    {errors.telefone && <div className="error">{errors.telefone}</div>}
                </div>
                <div>
                    <label>E-mail:</label>
                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <div className="error">{errors.email}</div>}
                </div>
                <div>
                    <label>Mensagem:</label>
                    <textarea
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                    />
                    {errors.message && <div className="error">{errors.message}</div>}
                </div>
                <button type="submit" class="botão" >Enviar</button>

            </form>
        </>
    );
};

export default MyForm;