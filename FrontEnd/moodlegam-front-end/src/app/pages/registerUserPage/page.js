import "./style.css"
import Button from "@/app/components/Button";

export default function RegisterUserPage(){


    return(
        <div className="background-register-user-page">
            <h1>Cadastro de novo usuário</h1>
            <form className="fields-register-user">
                <div className="input-row-register-user">
                    <input type="text" placeholder="Nome completo"></input>
                    <input type="password" placeholder="E-mail"></input>
                </div>

                <div className="input-row-register-user">
                    <input type="text" placeholder="Senha"></input>
                    <input type="password" placeholder="Confirmar senha"></input>
                </div>


            </form>
            <div className="button-wrapper-register-user">
                <Button
                    text="Finalizar cadastro"
                    type="submit"
                />
            </div>

        </div>
    );
}