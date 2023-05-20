/* eslint-disable prettier/prettier */

const FormToDoFooterButton = (el) => {
    // eslint-disable-next-line react/destructuring-assignment
    return (<button type="button" style={{ backgroundColor: "#af2f2f26", width: "20px", height: "20px", padding:"0"}} className="formToDo__footerButton" key={el.el.key}>{el.el.icon}</button>);
}
export default FormToDoFooterButton;
