import Background from "../../components/Background"
import Link from "next/link"
import Image from "next/image"
import "./style.css"

export default function AboutUs(){



    return (
        <Background>

            <div className="about-us-conteiner">
                <h1>Sobre nós</h1>
                <p>
                    Somos estudantes de Engenharia de Software da Universidade de Brasília - 
                    Campus Gama. O MoodleGam faz parte do nosso Trabalho de Conclusão de Curso 
                    que foi orientado pelo professor doutor <b>Sergio Antonio Andrade de Freitas.</b>
                </p>
                <div className="about-us-cards-wrapper">
                    <div className="about-us-card">
                        <div className="about-us-header">
                            <h3>Antonio Rangel Chaves</h3>
                        </div>
                        <div className="about-us-data">
                            
                            <Link
                                href="https://github.com/AntonioRangelC"
                                target="_blank"
                            >
                            
                                <div className="social-media-link">
                                    <Image
                                        src="/img/github_icon.svg"
                                        width={30}
                                        height={30}
                                        unoptimized={true}    
                                    />
                                    <p>AntonioRC</p>
                                </div>

                            </Link>

                            <Link
                                href={`mailto:antonio.rangel.02@gmail.com`}
                                
                            >
                            
                                <div className="social-media-link">
                                    <Image
                                        src="/img/email_icon.svg"
                                        width={30}
                                        height={30}
                                        unoptimized={true}    
                                    />
                                    <p>antonio.rangel.02@gmail.com</p>
                                </div>

                            </Link>

                            

                            <Link
                                href="https://www.linkedin.com/in/antonio-rangel-chaves-5627bb28a/"
                                target="_blank"
                            >
                            
                                <div className="social-media-link">
                                    <Image
                                        src="/img/linkedin_icon.svg"
                                        width={30}
                                        height={30}
                                        unoptimized={true}    
                                    />
                                    <p>Antonio Rangel Chaves</p>
                                </div>

                            </Link>
                        </div>
                    </div>



                    <div className="about-us-card">
                        <div className="about-us-header">
                            <h3>Vitor Diniz Pagani Vieira Ribeiro</h3>
                        </div>
                        <div className="about-us-data">
                            <Link
                                href="https://github.com/vitordiniz25"
                                target="_blank"
                            >
                            
                                <div className="social-media-link">
                                    <Image
                                        src="/img/github_icon.svg"
                                        width={30}
                                        height={30}
                                        unoptimized={true}    
                                    />
                                    <p>vitordiniz25</p>
                                </div>

                            </Link>

                            <Link
                                href={`mailto:vitordiniz25@gmail.com`}
                                target="_blank"
                            >
                            
                                <div className="social-media-link">
                                    <Image
                                        src="/img/email_icon.svg"
                                        width={30}
                                        height={30}
                                        unoptimized={true}    
                                    />
                                    <p>vitordiniz25@gmail.com</p>
                                </div>

                            </Link>

                            <Link
                                href="https://www.linkedin.com/in/vitor-diniz-969609204/"
                                target="_blank"
                            >
                            
                                <div className="social-media-link">
                                    <Image
                                        src="/img/linkedin_icon.svg"
                                        width={30}
                                        height={30}
                                        unoptimized={true}    
                                    />
                                    <p>Vitor Diniz Pagani Vieira Ribeiro</p>
                                </div>

                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Background>
    )
}