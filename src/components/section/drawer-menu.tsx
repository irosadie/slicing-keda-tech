import React, { FC, HTMLAttributes, ReactNode } from "react"
import { TimesIcon } from "../icons"
import { MENU } from "$/constants"
import Image from "next/image"
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

type DrawerMenuProps = HTMLAttributes<HTMLElement> & {
  menu: typeof MENU,
  isDrawerOpen: boolean,
  onDrawerClick: () => void,
  onMenuClick: (selector: string) => void
}

const DrawerMenu: FC<DrawerMenuProps> = (props) => {

  const {
    title,
    menu,
    isDrawerOpen,
    onMenuClick,
    onDrawerClick,
    ...rest
  } = props

  const menus: ReactNode[] = []

  menu.map((value, index) => {
    menus.push(
      <li
        key={index}
        className="py-2 px-5 hover:bg-gray-300 hover:text-blue-600"
        onClick={() => onMenuClick(value.link)}
      >
        {value.title}
      </li>
    )
  })

  return (
    <section className="tablet:hidden" {...rest}>
      <Drawer
        open={isDrawerOpen}
        onClose={onDrawerClick}
        direction='left'
      >
        <div className="h-full">
          <ul className="flex justify-between p-5 py-4 items-center">
            <li>
              <Image src='/imgs/coffee.svg' alt="logo" width={0} height={0} className="w-10 invert-[50%]" />
            </li>
            <li>
              <button
                className="p-0.5 hover:bg-gray-100 rounded-md"
                onClick={onDrawerClick}
              >
                <TimesIcon />
              </button>
            </li>
          </ul>
          <ul className="mt-3 text-xl font-bold">{menus}</ul>
        </div>
      </Drawer>
    </section>
  )
}

export default DrawerMenu
