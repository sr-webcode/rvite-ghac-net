import { render, cleanup, screen, fireEvent, within } from '@testing-library/react';

import Todos from './index'

// integration test

const addItem = (value: string) => {
	const inputBox: HTMLInputElement = screen.getByLabelText('search-text-bar')
	const addButton = screen.getByRole('button', { name: /ADD/ })
	expect(addButton).toBeInTheDocument()
	expect(inputBox).toBeInTheDocument()
	fireEvent.change(inputBox, { target: { value } })
	fireEvent.click(addButton)
}

describe("Todo's Page", () => {
	beforeEach(() => {
		render(<Todos />)
	})
	afterEach(() => {
		cleanup()
	})

	it("Can add todo items", () => {
		const listItemsOriginal = screen.queryAllByLabelText('list-item')
		expect(listItemsOriginal).toHaveLength(0)
		addItem("testItem")
		const listItems = screen.queryAllByLabelText('list-item')
		expect(listItems).toHaveLength(1)
	})
	it("Cannot add duplicate items", () => {
		const listItemsOriginal = screen.queryAllByLabelText('list-item')
		expect(listItemsOriginal).toHaveLength(0)
		addItem("testItem")
		addItem("testItem")
		const listItems = screen.queryAllByLabelText('list-item')
		expect(listItems).toHaveLength(1)
	})
	it("Can delete todo item", () => {
		addItem("testItem")
		const listItem = screen.queryByLabelText('list-item');
		if (listItem) {
			const testItem = within(listItem).queryByText(/testItem/)
			expect(testItem).toBeInTheDocument()
		}
	})
})