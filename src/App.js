import './index.css';
import Login from './pages/singIn';
import Register from './pages/register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CenterLayout, NormalLayout } from './components/layout';
import { Drons } from './pages/drons';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<CenterLayout />}>
                    <Route path="/auth" element={<Login />} />
                    <Route path="/auth/register" element={<Register />} />
                </Route>
                <Route path="/" element={<NormalLayout />}>
                    <Route path="/" element={<Drons />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
