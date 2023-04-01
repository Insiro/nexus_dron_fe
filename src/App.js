import './index.css';
import Login from './components/login';
import Register from './components/register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CenterLayout } from './components/layout';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/auth" element={<CenterLayout />}>
                        <Route path="/auth" element={<Login />} />
                        <Route path="/auth/register" element={<Register />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
