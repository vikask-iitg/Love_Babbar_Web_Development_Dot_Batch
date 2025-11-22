import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import { Home } from './components/Home'
import { Support } from './components/Support'
import { Labs } from './components/Labs'
import { NotFound } from './components/NotFound'
import { About } from './components/About'
import { Link, NavLink } from 'react-router'
import { MainHeader } from './components/MainHeader'

function App() {
  return (
    <div>

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<MainHeader></MainHeader>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/support" element={<Support></Support>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/labs" element={<Labs></Labs>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
