import "./style.css";

const Form = () => (
    <form className="form">
        <input className="form__field" placeholder="Co jest do zrobienia?" name="newTask"/>
        <input className="form__submit" type="submit" value="Dodaj zadanie"/>
    </form>
);

export default Form;