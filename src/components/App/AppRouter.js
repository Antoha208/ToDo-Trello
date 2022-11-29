import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
//import { useSelector } from 'react-redux'


import { routes } from './routes'
import {PROJECTS_ROUTE} from '../../utils/consts'

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({path, Component}) => 
        <Route key = {path} path = {path} element = {<Component />} exact />
      )}
      <Route path = "*" element = {<Navigate replace to = {PROJECTS_ROUTE} />} />
    </Routes>
  )
}

export default AppRouter