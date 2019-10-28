import React from 'react'
import { Route } from 'react-router-dom'
import { routes } from '@pages'

const App = () => routes.map(route => (<Route {...route} key={route.text} />))
export default App
