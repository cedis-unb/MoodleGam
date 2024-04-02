import Background from "../../components/Background";
import Button from "@/app/components/Button";
import "./style.css"


export default function EditUserPage(){


    return(
        

        <Background>
            
            <form className="fields-edit-user">
                <p id="edit-user-title">Editar dados</p>
                <input type="text" placeholder="Nome"></input>
                <input type="text" placeholder="E-mail"></input>
                <a>Alterar senha</a>
                <div className="button-wrapper-edit-user">

                    <Button
                        type="submit"
                        text="Salvar alterações"
                    />
                </div>

            </form>


        </Background>

        
        


    );
}