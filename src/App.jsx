import { useState } from 'react'
import Sidenavbar from './componnet/Sidenavbar'
import Main   from './componnet/Main'
import Work  from './componnet/Work'
import Project from './componnet/Project'
import Contact from './componnet/Contact'


function App() {

  return (
   
      <div>
        <Sidenavbar/>
        <Main />
        <Work/>
        <Project/>
        <Contact/>
    </div>
  )
}

export default App
