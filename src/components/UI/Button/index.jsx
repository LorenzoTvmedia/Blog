const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={`${props.className} button`}
      disabled={props.disabled}
      style={{borderRadius: '100px', padding: '1rem 7rem', fontSize: '700'}}
    >
      {props.children}
    </button>
  );
};
export default Button;
