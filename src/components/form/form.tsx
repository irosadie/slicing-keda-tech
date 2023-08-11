
import { FC, FormHTMLAttributes } from "react"
import styles from "./form.module.scss"

export type FormProps = FormHTMLAttributes<HTMLFormElement>

const generateForm = (props: FormProps) => {

  const { children, className: cn, ...rest } = props

  let className = [styles.form]

  if (cn) {
    className.push(cn)
  }

  return (
    <form
      className={className.join(' ')}
      {...rest}
    >
      {children}
    </form>
  )
}

const Form: FC<FormProps> = (props) => {
  const formElement = generateForm(props)
  return formElement
};

export default Form
