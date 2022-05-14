import React from "react"
import Link from "next/link"
import { useAuth } from "../auth/AuthUserProvider"
import NextLink from "next/link"
import { Button, Box, HStack } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { signInWithGoogle, signOut } from "../../util/firebase"

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
    name: "Favorite Songs",
    path: "/favorite-songs",
  },
  {
    name: "Languages & Genres",
    path: "/languages-genres",
  },
]

const NavLink = ({ name, path }: NavLinkData) => {
  const { pathname: currentPath } = useRouter()
  return (
    <NextLink key={path} href={path} passHref>
      <Link
        _hover={{
          textDecoration: "none",
        }}
        tabIndex={-1}
      >
        <Button
          _focusVisible={{ shadow: "outline" }}
          _focus={{ shadow: "none" }}
          colorScheme={"facebook"}
          variant={currentPath === path ? "solid" : "ghost"}
        >
          {name}
        </Button>
      </Link>
    </NextLink>
  )
}

const Navbar = () => {
  const { user, loading } = useAuth()
  return (
    <Box px={4} shadow="base">
      <HStack justifyContent="space-between">
        <HStack h={14} as="nav" spacing={4} alignItems="center">
          {navData.map((data) => (
            <NavLink key={data.path} {...data} />
          ))}
        </HStack>
        {user ? (
          <Button
            _focusVisible={{ shadow: "outline" }}
            _focus={{ shadow: "none" }}
            colorScheme={"facebook"}
            onClick={signOut}
          >
            Sign Out
          </Button>
        ) : (
          <Button
            _focusVisible={{ shadow: "outline" }}
            _focus={{ shadow: "none" }}
            colorScheme={"facebook"}
            onClick={signInWithGoogle}
          >
            Sign In
          </Button>
        )}
      </HStack>
    </Box>
  )
}

export default Navbar
