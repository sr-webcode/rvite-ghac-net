import { useEffect, useState } from 'react'
import { Box, Heading, ListItem, Spinner, UnorderedList, Text } from '@chakra-ui/react'

import useToggle from '@hooks/useToggle'
import { UsersList } from '@customTypes/users'

const ReturnData = ({ loading, records }: { loading: boolean, records: UsersList }) => {
  if (loading) return <Spinner size="lg" aria-label='spin-element' />
  if (records.length <= 0) return <Text>No Data</Text>
  return (
    <UnorderedList>{records.map(({ id, name }) => (
      <ListItem key={id} aria-label='remote-list-item'>{name}</ListItem>
    ))}
    </UnorderedList>
  )
}

const FetchSample = () => {

  const [loading, toggleLoading] = useToggle(false)
  const [mockData, setMockData] = useState<UsersList>([])

  useEffect(() => {
    toggleLoading()
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        setMockData(res)
      })
      .catch((err) => console.log(err))
      .finally(() => {
        toggleLoading()
      })
  }, [])

  return (
    <Box height="inherit" p={4}>
      <Heading size="2xl" as="h2" mb={2}>User Records</Heading>
      <ReturnData loading={loading} records={mockData} />
    </Box>
  )
}

export default FetchSample