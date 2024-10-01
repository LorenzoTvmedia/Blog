import { FaSpinner } from "react-icons/fa";
import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = ({ type }) => {
  return (
    <div
      className={`my-4 ${
        type === "full"
          ? `${classes.spinner__boxfull}`
          : `${classes.spinner__box}`
      }`}
    >
      <FaSpinner className={classes.spinner} />
    </div>
  );
};
export default LoadingSpinner;
