import { Button } from "$/components/button"
import { Card } from "$/components/card"
import { PowIcon } from "$/components/icons"
import { TextInput } from "$/components/text-input"
import Link from "next/link"
import styles from "./page.module.scss"
import { Form } from "$/components/form"

const Login = () => {
  return (
    <div className={styles.wrapper}>
      <Card className={styles.card}>
        <div className={styles.icon_wrapper}>
          <div className={styles.icon_rescale}>
            <PowIcon />
          </div>
        </div>
        <Form method="POST" >
          <TextInput
            name="email"
            type="email"
            placeholder="your@email.com"
            required
          />
          <TextInput
            name="password"
            type="password"
            placeholder="your password"
            required
          />
          <Button
            dimension="bigger"
            filled type="button"
            className="cursor-not-allowed"
          >
            LOGIN
          </Button>
        </Form>
        <div className={styles.back_wrapper}>
          <Link className={styles.link} href="/">back to home</Link>
        </div>
      </Card>
    </div>
  )
}

export default Login
