import "../Button/style.css"

export default function Button({ type, text, onClick, ...props }){


    return (
        <button className="button-component"type={type} onClick={onClick}>{text}</button>

    );
}