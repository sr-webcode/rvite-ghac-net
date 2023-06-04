import { useState } from 'react'
import { VStack, Divider, Box, useToast } from '@chakra-ui/react'

import HeaderAction from '@components/HeaderAction'
import ListContainer, { Todos } from '@components/ListContainer'

const Todo = () => {
  const toast = useToast()
  const [todoCollection, setTodoCollection] = useState<Todos>([])
  const handleTodo = (action: "add" | "delete", todoGiven: string) => {
    let todos: Todos = [];
    switch (action) {
      case "add":
        const recordExists = todoCollection.findIndex((todo) => todo === todoGiven) > -1
        if (recordExists) return toast({
          title: 'Record Exists!.',
          position: "top",
          status: 'error',
          duration: 500,
          isClosable: false,
        })
        todos = [...todoCollection, todoGiven]
        break;
      case "delete":
        console.log(todoGiven)
        todos = todoCollection.filter((todo) => todo !== todoGiven)
        break;
      default:
        break;
    }
    setTodoCollection(todos)
  }

  return (

    <Box
      p={10}
      bg="inherit"
      justifyContent="center"
    >
      <VStack mx="auto" maxW="800px" width="100%" height="100%" gap={12}>
        <HeaderAction handleTodo={(todo: string) => handleTodo("add", todo)} />
        <Divider
          maxW="60px"
          height="1px"
          orientation="horizontal"
          bg="blackAlpha.100"
        />
        <ListContainer todos={todoCollection}
          handleTodo={(todoGiven: string) => handleTodo("delete", todoGiven)} />
      </VStack>
    </Box>

  )
}

export default Todo