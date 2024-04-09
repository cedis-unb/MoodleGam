import "./style.css"

export default function MenuOption(props){


    return (
        <a className="option-container">
            <div className="option-icon-conteiner">
                
                {props.children}
            </div>

            <div className="option-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </div>
        </a>


    );
}