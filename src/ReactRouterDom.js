import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { useState, createContext } from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const AppContext = createContext();

export const ReactRouterDom = () => {
    
    const [username, setUsername] = useState("Nicholas");

    const client = new QueryClient();

    return (
        <div className="App">
            <AppContext.Provider value={{ username, setUsername }}>
                <QueryClientProvider client={client}>
                    <Router>
                        <div>
                            <Link to="/">Home</Link>
                            <Link to="/menu">Menu</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                        <Routes>
                            <Route path="/" element={<Home />}/>
                            <Route path="/menu" element={<Menu />}/>
                            <Route path="/contact" element={<Contact />}/>
                            <Route path="*" element={<h1>Page not found</h1>}/>
                        </Routes>
                    </Router>
                </QueryClientProvider>
            </ AppContext.Provider>
        </div>
    )
}