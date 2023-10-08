import MainEventPage from './components/MainEvent/Mainevent'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Eventdetails from './components/Events/Eventdetails'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainEventPage />}></Route>
          <Route path="events/:id" element={<Home />}></Route>
          <Route path="event/:id" element={<Eventdetails />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
