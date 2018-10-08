import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
//components
import App  from '../components/App'
import Button from '../components/proxy/Button'

describe("<App />", () => {
	let app
	
	beforeEach(() => {
		app = shallow(<App />)
	})

	it('renders the button', () => {
		expect(app.find(Button).length).to.equal(1)
	})
})

