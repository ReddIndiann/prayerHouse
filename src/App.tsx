import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Leadership } from './pages/Leadership'
import { Ministries } from './pages/Ministries'
import { Messages } from './pages/Messages'
import { WeeklyActivities } from './pages/WeeklyActivities'
import { Gallery } from './pages/Gallery'
import { Give } from './pages/Give'
import { Contact } from './pages/Contact'
import { NewConverts } from './pages/NewConverts'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="leadership" element={<Leadership />} />
          <Route path="ministries" element={<Ministries />} />
          <Route path="messages" element={<Messages />} />
          <Route path="weekly-activities" element={<WeeklyActivities />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="give" element={<Give />} />
          <Route path="contact" element={<Contact />} />
          <Route path="new-converts" element={<NewConverts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
