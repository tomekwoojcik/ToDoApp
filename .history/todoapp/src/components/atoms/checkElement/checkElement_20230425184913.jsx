const CheckElement = (e) => {
  const { id, title } = e;
  return (
    <li className="" key={id}>
      {title}
    </li>
  );
};

export default CheckElement;
