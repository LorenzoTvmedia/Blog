// A wrapper
const Card = (props) => {
  return <div className={`${props.className} card`}>{props.children}</div>;
};
export default Card;
