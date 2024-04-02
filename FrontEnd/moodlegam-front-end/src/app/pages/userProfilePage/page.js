import Background from "../../components/Background";
import "./style.css"
import Image from "next/image";

export default function UserProfilePage(){


    return (
        <Background>

            <div className="user-info-container">
                <div className="title-edit">
                    <p id="user-profile-title">Dados de Ricardo</p>
                    <div className="edit-user-button-wrapper">
                        
                        <Image
                            src="/img/edit.svg"
                            width={30}
                            height={30}
                            unoptimized={true}
                        />

                        <p id="edit-button">Editar dados</p>

                    </div>
                </div>
                
                <p>Nome:  <span id="user-data">Ricardo Oliveira Matos</span></p>
                <p>E-mail:  <span id="user-data">ricardo@gmail.com</span></p>
                <a>Alterar senha</a>
            </div>




        </Background>



    );
}
