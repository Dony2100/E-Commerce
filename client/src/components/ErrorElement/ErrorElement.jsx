import React, {useRef} from "react";
import "./errorElement.css";
const ErrorElement = ({error}) => {
  const hiddenElement = useRef();
  setTimeout(() => {
    hiddenElement.current.style.opacity = "0";
  }, 8000);

  return (
    <div ref={hiddenElement} className="errorElement slide-fwd-center">
      {error}
    </div>
  );
};

export default ErrorElement;
