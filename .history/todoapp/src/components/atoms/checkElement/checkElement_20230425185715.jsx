const CheckElement = (e) => {
  const { id, title } = e;
  return (
    <li className="formToDo__CheckElement" key={id}>
      {title}
    </li>
  );
};

export default CheckElement;
