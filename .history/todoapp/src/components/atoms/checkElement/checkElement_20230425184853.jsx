const CheckElement = (e) => {
  const { id, title } = e;
  return (
    <li className="__CartsElement" key={id}>
      {title}
    </li>
  );
};

export default CheckElement;
