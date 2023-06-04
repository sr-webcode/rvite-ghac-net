import {
    render, screen, cleanup,
    // fireEvent, within 
} from '@testing-library/react'

import ListContainer from './ListContainer'

const TODOS = ["todo 1", "todo 2"]
describe("List Component", () => {
    let mockHandleTodo: jest.Func;

    beforeEach(() => {
        mockHandleTodo = jest.fn()
        render(<ListContainer todos={TODOS} handleTodo={mockHandleTodo} />)
    })
    afterEach(() => {
        cleanup()
    })

    test("List Container Present", () => {
        const listContainer = screen.getByLabelText('list-container');
        expect(listContainer).toBeInTheDocument()
    })
    test('Displays List Items', () => {
        const listItems = screen.queryAllByLabelText('list-item').length;
        expect(listItems).toBeGreaterThan(0)
    })
})

// test('Deletes List Item', async () => {
    //     const todoItems = screen.queryAllByLabelText('list-item');
    //     expect(todoItems).toHaveLength(2);

    //     const deleteButton = within(todoItems[1]).queryByLabelText('delete-list-button');
    //     expect(deleteButton).toBeInTheDocument();

    //     if (deleteButton) {
    //         fireEvent.click(deleteButton);
    //         expect(mockHandleTodo).toHaveBeenCalledWith("todo 2");
    //     }
    // });