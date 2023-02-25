import './App.css'
import { Routes, Route } from 'react-router-dom'

import HomePage from './components/home-page/HomePage'
import Page404 from './components/404/Page404'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/constructies/dragende-constructies' />
        <Route path='/constructies/balkon-frames' />
        <Route path='/constructies/renovatie-werk' />
        <Route path='/aluminium-hekken/spijlenhek15x30mm' />
        <Route path='/aluminium-hekken/spijlenhek70x20mm' />
        <Route path='/aluminium-hekken/spijlenhek-rond-25mm' />
        <Route path='/stalen-hekken' />
        <Route path='/machine-bouw' />
        <Route path='/machine-bouw/drukvaten' />
        <Route path='/machine-bouw/vacuum-vaten' />
        <Route path='/voorraad' />
        <Route path='/voorraad/aluminium' />
        <Route path='/voorraad/staal' />
        <Route path='/voorraad/rvs' />
        <Route path='/erkend-leerbedrijf' />

        <Route path='*' element={<Page404 />}/>
      </Routes>
    </div>
  )
}

export default App
