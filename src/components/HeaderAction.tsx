import { useRef } from 'react'

import { FormControl, Button, Input, Box, HStack } from '@chakra-ui/react'

const HeaderAction = ({ handleTodo }: { handleTodo: (todo: string) => void }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const onAdd = () => {
    const text = inputRef.current?.value
    if (!text) return
    handleTodo(text)
    inputRef.current?.focus()
    inputRef.current.value = ""
  }

  return (
    <Box as="form" width="100%">
      <FormControl>
        <HStack
          gap={0}
          overflow="hidden"
          outline="6px solid"
          outlineColor="blackAlpha.100"
        >
          <Input
            size="lg"
            border={0}
            bg="white"
            role="textbox"
            aria-label='search-text-bar'
            ref={inputRef}
            borderRadius={0}
            _focus={{ boxShadow: "none" }}
            placeholder="What will you do today?" />
          <Button
            size="lg"
            maxW="120px"
            width="100%"
            color="white"
            borderRadius={0}
            bg="rebeccapurple"
            onClick={onAdd}
            _hover={{ bgColor: "#71c1f2" }}
          >
            ADD
          </Button>
        </HStack>
      </FormControl>
    </Box>
  )
}

export default HeaderAction 