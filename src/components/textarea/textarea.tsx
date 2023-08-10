import { FC, TextareaHTMLAttributes } from "react"
import styles from "./textarea.module.scss"

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

const generateTextArea = (props: TextAreaProps) => {

  const { children, className: cn, ...rest } = props

  let className = [styles.textarea]

  if (cn) {
    className.push(cn)
  }

  return (
    <textarea className={className.join(' ')} {...rest}>
      {children}
    </textarea>
  )
}

const TextArea: FC<TextAreaProps> = (props) => {
  const textAreaElement = generateTextArea(props);
  return textAreaElement;
};

export default TextArea
