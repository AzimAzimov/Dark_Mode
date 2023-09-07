'use clint'
import React, { FC } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import ThemeButton from "components/themeButton/ThemeButton"

interface HeaderProps {
  props: HeaderPropsArray[]
}

interface HeaderPropsArray {
  title: string
  href: string
}

const Header: FC<HeaderProps> = ({ props }) => {
  const router = useRouter()
  const pathName = router.pathname

  return (
    <header className="bg-black py-5">
      <div className="container flex items-center justify-between text-white">
        <Link href={"/"}>LOGO</Link>
        <nav className="flex items-center gap-5">
          {props.map((item, index) => {
            return (
              <li key={index} className="relative">
                <Link
                  href={`${item.href}`}
                  className={`${
                    item.href === pathName &&
                    "relative text-white/90 before:absolute before:bottom-[-2px] before:h-[1px] before:w-[100%] before:bg-white before:duration-500"
                  } after:w-0 flex items-center text-white/60 transition-all after:duration-500 hover:text-white hover:after:absolute hover:after:bottom-[-2px] hover:after:h-[1px] hover:after:w-[100%] hover:after:bg-white`}
                >
                  {item.title}
                </Link>
              </li>
            )
          })}
        </nav>
        <ThemeButton/>
      </div>
    </header>
  )
}

export default Header
