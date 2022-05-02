import React from "react"
import Link from "next/link"

type NavLink = {
  name: string
  path: string
}

const navData: NavLink[] = [
  {
    name: "Home",
    path: "/",
  },
]

const Navbar = () => (
  <header>
    <nav>
      {navData
        .map(({ name, path }) => (
          <Link key={path} href={path}>
            <a>{name}</a>
          </Link>
        ))
        // @ts-ignore
        .reduce((left, right) => [left, " | ", right])}
    </nav>
  </header>
)

export default Navbar
