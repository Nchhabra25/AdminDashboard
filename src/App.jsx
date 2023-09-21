import React from 'react'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Layout from './Components/layout/Layout'
import Dashboard from './pages/dashboard/Dashboard';
import Calender from './pages/calender/Calender';
import Boards from './pages/board/Board';
import DataGrid from './pages/datagrid/DataGrid';
function App() {

  return (
    <>
    <div id='dashboard'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='calendar' element={<Calender/>}/>
          <Route path='board' element={<Boards/>}/>
          <Route path='users' element={<DataGrid/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
      
    </>
  )
}

export default App
