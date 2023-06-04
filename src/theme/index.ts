import chakraTheme from '@chakra-ui/theme';
import { extendBaseTheme } from '@chakra-ui/react';

const { Button, Form, Input, Checkbox, Alert, Heading, Spinner } = chakraTheme.components;

const theme = extendBaseTheme({
	components: {
		Form,
		Input,
		Button,
		Checkbox,
		Alert,
		Heading,
		Spinner
	}
});

export default theme;
