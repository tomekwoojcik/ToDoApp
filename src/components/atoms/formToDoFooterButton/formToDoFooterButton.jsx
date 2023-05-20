/* eslint-disable prettier/prettier */

const FormToDoFooterButton = (el) => {
    // eslint-disable-next-line react/destructuring-assignment
    return (<button type="button" className="formToDo__footerButton" key={el.el.key}>{el.el.icon}</button>);
}
export default FormToDoFooterButton;
