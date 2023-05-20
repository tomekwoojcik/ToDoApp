const CheckElement = (e) => {
  const { id, title } = e;
  return (
    <li className="__CheckElement" key={id}>
      {title}
    </li>
  );
};

export default CheckElement;
