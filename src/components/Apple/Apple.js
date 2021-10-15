import apple from "../../assets/apple.svg";

import classNames from "classnames";

const Apple = ({ style, isShaking, isDropped }) => {
  return (
    <img
      style={style}
      className={classNames({
        apple: true,
        shaking: isShaking && !isDropped,
      })}
      src={apple}
      alt="Apple"
    />
  );
};

export default Apple;
