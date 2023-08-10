import { Button } from "$/components/button"
import { Card } from "$/components/card"
import PowIcon from "$/components/icons/pow"
import { TextInput } from "$/components/text-input"
import Link from "next/link"

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen max-w-lg m-auto">
      <Card className="px-6">
        <div className="flex justify-center items-center py-4">
          <div className="scale-150">
            <PowIcon />
          </div>
        </div>
        <form
          method="POST"
          className="grid space-y-8"
        >
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
        </form>
        <div className="flex justify-end pt-6">
          <Link className="text-blue-600 hover:text-blue-800" href="/">back to home</Link>
        </div>
      </Card>
    </div>
  )
}

export default Login