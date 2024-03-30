import "../Button/style.css"

export default function Button({ type, text, ...props }){


    return (
        <button className="button-component"type={type}>{text}</button>

    );
}