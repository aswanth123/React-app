import react from 'react';
import ProjectsPage from './projects/ProjectsPage';
import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import HomePage from './home/HomePage';
import ProjectPage from "./projects/ProjectPage";

export default function App() {
   return (
     <Router>
       <header className="sticky">
         <span className="logo">
           <img src="/assets/logo-3.svg" alt="logo" width="40" height="90" />
         </span>
         <NavLink to="/" className="button rounded">
           <span className="icon-home"></span>
           Home
         </NavLink>
         <NavLink to="/projects" className="button rounded">
           Projects
         </NavLink>
       </header>
       <div className="container">
         <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/projects" element={<ProjectsPage />} />
           <Route path="/projects/:id" element={<ProjectPage />} />
         </Routes>
       </div>
     </Router>
   );
}