//styles
import { useMemo } from "react";
import classNames from "classnames";
import styles from "./followButton.module.scss";
import { ButtonPropsType, ButtonType } from "./types";

const FollowButton = ({
  rightIcon,
  leftIcon,
  text,
  onPress,
  type,
  border,
  buttonType = ButtonType.PRIMARY,
  ...otherProps
}: ButtonPropsType) => {
  const buttonstyle = useMemo((): any => {
    switch (buttonType) {
      case ButtonType.DARK:
        return styles.dark_container;
      case ButtonType.BORDER:
        return styles.border_container;
      default:
        return styles.container;
    }
  }, [buttonType]);

  return (
    <button
      type={type || undefined}
      className={buttonstyle}
      {...otherProps}
      onClick={onPress}
    >
      <>{leftIcon && leftIcon}</>
      {text && (
        <p className={classNames(styles["sub_2"], styles["white1"])}>{text}</p>
      )}
      <>{rightIcon && rightIcon}</>
    </button>
  );
};

export default FollowButton;
