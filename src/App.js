import { Route, Routes } from 'react-router-dom';
import './App.css';
import IntroductionPage from './routes/introduction-page';
import ProjectMainPage from './components/project-main-page/project-main-page.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<IntroductionPage />} />
      <Route path="monster-rolodex" element={<ProjectMainPage />} />
    </Routes>
  )
}

export default App;
