import React from "react";
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from "./About";
import Contact from "./Contact";
import User from "./User";
import { createContext } from "react";
import Input from './Todo_list/Input'
import Fetch_api from './React_api/Fetch_api'
const FirstName =  createContext()
const React_Router = () => {
  return (<>
  <FirstName.Provider value={"muneeb"}>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/input' element={<Input />} />
      <Route path='/fetch_api' element={<Fetch_api />} />
      <Route path='/user/:fname/:lname' element={<User/>} />
    </Routes>
    </FirstName.Provider>
  </>
  )
}

export default React_Router

export {FirstName}