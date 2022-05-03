import React from "react"
import Link from "next/link"
import NextLink from "next/link"
import { Button, Box, HStack } from "@chakra-ui/react"
import { useRouter } from "next/router"

type NavLinkData = {
  name: string
  path: string
}

const navData: NavLinkData[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Top Songs",
    path: "/top-songs",
  },
  {
    name: "Languages & Genres",
    path: "/languages-genres",
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



