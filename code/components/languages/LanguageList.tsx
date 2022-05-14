import { Text, VStack, Button } from "@chakra-ui/react"
import Link from "next/link"
import { LanguageWithId } from "../../types"

type Props = {
  readonly languages: LanguageWithId[]
}

type NavLinkData = {
  name: string
  path: string
}

const LanguageList = ({ languages }: Props) => {
  return (
    <VStack>
      {languages.length ? (
        languages.map((language) =>
          <Button
            key={language.id}
            size="lg"
            variant="solid"
            colorScheme="blue"
          > <Link key="/top-songs" href={"/top-songs?name=" + language.name} >
              <a>{language.name} </a>
            </Link></Button>)
      ) : (
        <Text>There are no languages right now 👀</Text>
      )}
    </VStack >
  )
}

export default LanguageList