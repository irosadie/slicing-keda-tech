import React, { FC, HTMLAttributes } from "react"
import { Button } from "../button"
import { Form, FormProps } from "../form"
import { TextInput, TextInputProps } from "../text-input"
import { TextArea, TextAreaProps } from "../textarea"
import Image from "next/image"

type ContactSectionProps = HTMLAttributes<HTMLElement> & {
  title: string,
  formProps: FormProps,
  textInputProps: {
    name: TextInputProps,
    email: TextInputProps,
  },
  textAreaProps: {
    content: TextAreaProps
  },
  ctaButtonText?: string
}

const ContactSection: FC<ContactSectionProps> = (props) => {

  const {
    title,
    formProps,
    textInputProps,
    textAreaProps,
    ctaButtonText = 'KIRIM',
    ...rest
  } = props

  return (
    <section className="bg-white py-3 tablet:py-10" {...rest}>
      <div className="max-w-5xl m-auto">
        <div className="grid tablet:grid-cols-2">
          <div className="flex justify-center">
            <Image
              src='/imgs/cs.svg'
              alt=''
              width={0}
              height={0}
              className='hidden tablet:block tablet:w-[580px]'
            />
          </div>
          <div className="space-y-6 p-4">
            <h2 className="text-2xl tablet:text-4xl font-extrabold">{title}</h2>
            <Form {...formProps}>
              <TextInput {...textInputProps.email} />
              <TextInput {...textInputProps.name} />
              <TextArea {...textAreaProps.content} />
              <div className="flex justify-end">
                <Button
                  type="button"
                  className="cursor-not-allowed"
                >
                  {ctaButtonText}
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
