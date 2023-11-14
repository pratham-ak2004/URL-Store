import React from 'react'
import Generate from '../generate/Generate'
import Redirect from '../redirect/Redirect'
import {BrowserRouter , Routes , Route} from 'react-router-dom'


export default function Background() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Generate/>}></Route>
          <Route exact path="/:target" element={<Redirect/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
