import { ButtonHTMLAttributes, FC, ReactNode } from "react"
import styles from "./button.module.scss"

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
  filled?: boolean,
  dimension?: 'normal' | 'bigger',
  className?: string,
}

const generateButton = (props: ButtonProps) => {

  const { children, filled, dimension = 'normal', className: cn, ...rest } = props

  let className = [styles.default]

  if (filled) {
    className.push(styles.filled)
  }

  if (dimension === 'bigger') {
    className.push(styles.d_bigger)
  }

  if (cn) {
    className.push(cn)
  }

  return (
    <button className={className.join(' ')} {...rest}>
      {children}
    </button>
  )
}

const Button: FC<ButtonProps> = (props) => {
  const buttonElement = generateButton(props);
  return buttonElement;
};

export default Button
