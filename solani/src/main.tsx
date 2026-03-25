import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css';
import App from './App.tsx';
import Projects from './projects/projects.tsx';
import Artworks from './artworks/artworks.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="projects" element={<Projects />} />
        <Route path="artworks" element={<Artworks />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
