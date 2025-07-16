import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './routes/App.jsx'
import Upload from './routes/Upload.jsx'
import Directory from './routes/Directory.jsx'
import SearchResults from './routes/SearchResults.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { system } from "@chakra-ui/react/preset";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider value={system}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/Directory" element={<Directory />} />
        <Route path="/SearchResults" element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
)
