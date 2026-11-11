import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Eventos from './pages/Eventos/Eventos'
import Contato from './pages/Contato/Contato'
import NaoEncontrada from './pages/NaoEncontrada/NaoEncontrada'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="eventos" element={<Eventos />} />
          <Route path="contato" element={<Contato />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
