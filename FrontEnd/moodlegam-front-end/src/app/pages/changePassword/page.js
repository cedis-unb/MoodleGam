import Background from "../../components/Background";
import Button from "@/app/components/Button";
import "./style.css"


export default function EditUserPage(){


    return(
        

        <Background>
            
            <form className="change-password-form">
                <p id="change-password-title">Alteração de senha</p>
                <input type="password" placeholder="Senha"></input>
                <input type="password" placeholder="Nova senha"></input>
                
                <div className="button-wrapper-change-password">

                    <Button
                        type="submit"
                        text="Salvar alterações"
                    />
                </div>

            </form>


        </Background>

        
        


    );
}