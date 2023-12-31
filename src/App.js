import { Route, Routes } from 'react-router-dom';
import './App.scss';
import IntroductionPage from './routes/introduction-page/introduction-page.component';
import ProjectMainPage from './routes/project-main-page/project-main-page.component';

const App = () => {
  return (
    <Routes>
      <Route path='/monster-rolodex' element={<IntroductionPage />} />
      <Route path="/monster-rolodex/directory" element={<ProjectMainPage />} />
    </Routes>
  )
}

export default App;
