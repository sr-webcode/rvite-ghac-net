import { List, ListItem, Text, Button } from '@chakra-ui/react'

export type Todos = string[]

const TrashIcon = () => <>🗑️</>
const ListContainer = ({ todos, handleTodo }: { todos: Todos, handleTodo: (todo: string) => void }) => {
  return (
    <>
      <List aria-label='list-container' overflow="hidden" bg="white" width="100%" rounded="lg" spacing={4} p={8}>
        {todos.map((todo, idx) => (
          <ListItem role="listitem" aria-label='list-item' key={idx} display="flex" alignItems="center" justifyContent="space-between">
            <Text>{todo}</Text>
            {/* <Checkbox checked size="md" colorScheme='purple'>
          </Checkbox> */}
            <Button
              px={2}
              size="sm"
              iconSpacing={0}
              variant="solid"
              rightIcon={<TrashIcon />}
              aria-label='delete-list-button'
              onClick={() => handleTodo(todo)}
            />
          </ListItem>
        ))}
      </List>      
    </>
  )
}

export default ListContainer