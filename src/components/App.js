import React, { Component } from 'react'
import Button from './proxy/Button'
import CatList from './CatList'
import '../css/App.css'
import { connect } from 'react-redux'
import fetchCats from '../actions/fetchCats'
import fetchMoreCats from '../actions/fetchMoreCats'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Button className="primary" text="Fetch cats" onClick={this.props.fetchCats}/>
				<Button className="secondary" text="Fetch more cats" onClick={this.props.fetchMoreCats}/>
				<header className="App-header">
					<CatList cats={this.props.cats}/>
				</header>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
		cats: state.cats
})

export default connect(mapStateToProps, { fetchCats, fetchMoreCats })(App);
