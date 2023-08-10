import { FC, TextareaHTMLAttributes } from "react"

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

const generateTextArea = (props: TextAreaProps) => {

  const { children, className: cn, ...rest } = props

  let className = 'bg-gray-100 rounded-md py-2 px-4 border border-gray-400 placeholder:text-gray-500 outline-none'

  if (cn) {
    className += ` ${cn}`
  }

  return (
    <textarea className={className} {...rest}>
      {children}
    </textarea>
  )
}

const TextArea: FC<TextAreaProps> = (props) => {
  const textAreaElement = generateTextArea(props);
  return textAreaElement;
};

export default TextArea
