const Button = ({ danger, content }) => {
  return (
    <button className={`button ${danger && "danger"}`}>
      {!!content && content}
    </button>
  );
};

export default Button;
