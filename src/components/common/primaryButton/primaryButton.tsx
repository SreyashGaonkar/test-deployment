//styles
import { useMemo } from "react";
import styles from "./primaryButton.module.scss";
import { ButtonPropsType, ButtonType } from "./types";

const PrimaryButton = ({
  rightIcon,
  leftIcon,
  text,
  onPress,
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
    <button className={buttonstyle} {...otherProps} onClick={onPress}>
      <>{leftIcon && leftIcon}</>
      {text && <p className={styles["title"]}>{text}</p>}
      <>{rightIcon && rightIcon}</>
    </button>
  );
};

export default PrimaryButton;
