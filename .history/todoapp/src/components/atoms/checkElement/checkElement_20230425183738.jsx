const CheckElement = (e) => {
  const { id, title } = e;
  return (
    <li key={id}>
      <p>{title}</p>
    </li>
  );
};

export default CheckElement;
