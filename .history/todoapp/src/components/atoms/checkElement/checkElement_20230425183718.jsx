const CheckElement = (el) => {
  const { id, title } = el;
  return (
    <li key={id}>
      <p>{title}</p>
    </li>
  );
};

export default CheckElement;
