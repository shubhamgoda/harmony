import { Text, VStack, Button } from "@chakra-ui/react"
import Link from "next/link"
import NextLink from "next/link"
import { LanguageWithId } from "../../types"

type Props = {
  readonly language: LanguageWithId[]
}

type NavLinkData = {
  name: string
  path: string
}

const navData: NavLinkData[] = [
  {
    name: "Top Songs - ",
    path: "/top-songs",
  },
]

let lst: String[] = []

function myFunction(id: String) {
  lst.push(id)
  return id
}

const LanguageList = ({ language }: Props) => {
  return (
    <VStack>
      {language.length ? (
        language.map((language) =>
          <Button
            key={language.id}
            size="lg"
            variant="solid"
            colorScheme="blue"
          > <Link key={navData[0].path} href={"/top-songs?name=" + language.name} >
              <a>{myFunction(language.name)} </a>
            </Link></Button>)
      ) : (
        <Text>There are no languages right now 👀</Text>
      )}
    </VStack >
  )
}

export default LanguageList