import { FC, InputHTMLAttributes } from "react"
import styles from "./text-input.module.scss"

export type TextInputProps = InputHTMLAttributes<HTMLInputElement>

const generateTextInput = (props: TextInputProps) => {

  const { children, className: cn, ...rest } = props

  let className = [styles.input]

  if (cn) {
    className.push(cn)
  }

  return (
    <input className={className.join(' ')} {...rest}>
      {children}
    </input>
  )
}

const TextInput: FC<TextInputProps> = (props) => {
  const textInputElement = generateTextInput(props);
  return textInputElement;
};

export default TextInput
