import fetchMock from 'jest-fetch-mock'
import { screen, render, cleanup, act } from '@testing-library/react';

import FetchSample from './index'

const SAMPLE_RESPONSE = [
	{
		"id": 1,
		"name": "Leanne Graham",
		"username": "Bret",
		"email": "Sincere@april.biz",
		"address": {
			"street": "Kulas Light",
			"suite": "Apt. 556",
			"city": "Gwenborough",
			"zipcode": "92998-3874",
			"geo": {
				"lat": "-37.3159",
				"lng": "81.1496"
			}
		},
	}
]

describe("Fetch Sample Page", () => {
	beforeEach(async () => {
		fetchMock.resetMocks()
		fetchMock.mockResponseOnce(JSON.stringify(SAMPLE_RESPONSE));
		// fetchMockDelay()
		await act(async () => {
			render(<FetchSample />);
		});
	})
	afterEach(() => {
		cleanup()
	})

	test("Page Header Present", () => {
		const pageHeader = screen.getByText(/User Records/)
		expect(pageHeader).toBeInTheDocument()
	})

	it("Display Fetched Items", async () => {
		const remoteListItems = await screen.findAllByLabelText('remote-list-item')
		expect(remoteListItems).toHaveLength(1)
	})
})


// when testing a component with fetch call make sure to do the followin:
// 1.) utilize jest-fetch-mock (ez approach instead of manual mocking everytime)
// 2.) beforeEach Test include all your mock responses e.g data, auth, etc


// const fetchMockDelay = async () => {
// 	const delay = 1500;
// 	fetchMock.mockResponseOnce(async () => {
// 		await new Promise(resolve => setTimeout(resolve, delay));
// 		return JSON.stringify([]);
// 	});
// }

// test("Spinner ran", async () => {
// 	screen.debug()
// 	const spinboi = await screen.findByLabelText('spin-element')
// 	expect(spinboi).toBeInTheDocument()
// })