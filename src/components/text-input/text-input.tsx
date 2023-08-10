import { FC, InputHTMLAttributes } from "react"

export type TextInputProps = InputHTMLAttributes<HTMLInputElement>

const generateTextInput = (props: TextInputProps) => {

  const { children, className: cn, ...rest } = props

  let className = 'bg-gray-100 rounded-md py-2 px-4 border border-gray-400 placeholder:text-gray-500 outline-none'

  if (cn) {
    className += ` ${cn}`
  }

  return (
    <input className={className} {...rest}>
      {children}
    </input>
  )
}

const TextInput: FC<TextInputProps> = (props) => {
  const textInputElement = generateTextInput(props);
  return textInputElement;
};

export default TextInput
