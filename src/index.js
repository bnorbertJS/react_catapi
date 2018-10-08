import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import watchFetchMoreCatsSaga from './saga/fetchMoreCats'
import './css/index.css'
import App from './components/App'

const loggerMiddleware = createLogger()
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        sagaMiddleware,
        loggerMiddleware ))

//we need to run and pass a saga as parameter
sagaMiddleware.run(watchFetchMoreCatsSaga)


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root')
);
