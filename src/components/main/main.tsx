import { FC, InputHTMLAttributes, ReactNode } from "react"

export type MainProps = InputHTMLAttributes<HTMLInputElement> & {
  children: ReactNode
}

const generateTextInput = (props: MainProps) => {
  const { children, ...rest } = props

  return <main {...rest}>{children}</main>
}

const Main: FC<MainProps> = (props) => {
  const textInputElement = generateTextInput(props);
  return textInputElement;
};

export default Main