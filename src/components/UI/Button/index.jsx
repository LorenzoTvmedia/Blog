const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={`${props.className} button`}
      disabled={props.disabled}
      style={{padding: '.8rem 2.5rem', fontSize: '700'}}
    >
      {props.children}
    </button>
  );
};
export default Button;
