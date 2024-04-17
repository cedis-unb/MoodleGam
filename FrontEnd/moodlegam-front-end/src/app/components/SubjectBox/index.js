import './style.css'


export default function SubjectBox(props){



    return (
        <div className="subject-container">
            <div className="subject-header">
                <span>{props.yearSemester}</span>
            </div>

            <div className="subject-data">
                <h1>{props.name}</h1>
                <h4>Código da Disciplina: {props.code}</h4>
            </div>

            <div className="subject-footer">
                <p>Criada em {props.createdAt}</p>
                <a>Ver detalhes</a>
            </div>
            
        </div>
    );
}