import { render, cleanup, screen, fireEvent } from '@testing-library/react'

import HeaderAction from './HeaderAction'

describe("Todo Header", () => {
    beforeEach(() => {
        render(<HeaderAction handleTodo={jest.fn()} />)
    })
    afterEach(() => {
        cleanup()
    })

    it('Search bar text changes', () => {
        const textValue = "test change" 
        const searchBar: HTMLInputElement = screen.getByLabelText('search-text-bar')
        expect(searchBar).toBeInTheDocument()
        fireEvent.change(searchBar, { target: { value: textValue} })
        expect(searchBar.value).toBe(textValue)
    })
})