import { ButtonHTMLAttributes, FC, ReactNode } from "react"

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
  filled?: boolean,
  dimension?: 'normal' | 'bigger',
  className?: string,
}

const generateButton = (props: ButtonProps) => {

  const { children, filled, dimension = 'normal', className: cn, ...rest } = props

  let className = 'bg-white border-2 border-cyan-600 w-fit rounded-lg text-cyan-600 px-10 py-2 text-sm font-semibold hover:bg-cyan-600 hover:text-white'

  if (filled) {
    className += ' w-full'
  }

  if (dimension === 'bigger') {
    className += ' py-2.5'
  }

  if (cn) {
    className += ` ${cn}`
  }

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  )
}

const Button: FC<ButtonProps> = (props) => {
  const buttonElement = generateButton(props);
  return buttonElement;
};

export default Button
