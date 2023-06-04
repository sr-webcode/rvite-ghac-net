import { Center, Heading } from '@chakra-ui/react';
import { createBrowserRouter } from 'react-router-dom';

import Todos from '@pages/Todos'
import FetchSample from '@pages/FetchSample'

const ErrorPage = () => (
	<Center height="inherit">
		<Heading as='h1' size='2xl'>
			Page Not Found 💩
		</Heading>
	</Center>
)

const Router = createBrowserRouter([
	{
		path: '/',
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Todos />
			},
			{
				path: "todos",
				element: <Todos />
			},
			{
				path: "fetchsample",
				element: <FetchSample />
			}
		]
	},
]);


export default Router