import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Navigation from './components/Navigation.tsx';
import JobFeed from './components/jobFeed/JobFeed.tsx'
import Matchjobs from './components/MatchJobs/Matchjobs.tsx';
import Applied from './components/Applied/Applied.tsx'
import Skipped from './components/skippedJob/SkippedJob.tsx'
import Preferences from './components/preferences/preferences.tsx'
import UserPortal from './components/userPortal/UserPortal.tsx'

function App() {
  return (
    <div className="App w-full">
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path='feed' element={<JobFeed />} />
          <Route path='matches' element={< Matchjobs />} />
          <Route path='applied' element={< Applied/>} />
          <Route path='skipped' element ={<Skipped/>} />

          <Route path='preferences' element ={<Preferences/>} />
          <Route path='profile' element ={<UserPortal/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
