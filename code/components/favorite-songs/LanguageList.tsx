import { Text, VStack, Button } from "@chakra-ui/react"
import { LanguageWithId } from "../../types"

type Props = {
  readonly language: LanguageWithId[]
}

const LanguageList = ({ language }: Props) => {
  return (
    <VStack>
      {language.length ? (
        language.map((language) =>
          <Button
            key={language.id}
            size="lg"
            variant="ghost"
            colorScheme="blue"
          >{language.name}</Button>)
      ) : (
        <Text>There are no languages right now 👀</Text>
      )}
    </VStack>
  )
}

export default LanguageList