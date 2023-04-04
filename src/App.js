import './index.css';
import Login from './pages/singIn';
import Register from './pages/register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CenterLayout, NormalLayout } from './components/layout';
import { Drons } from './pages/drons';
import { NewDron } from './pages/newDron';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<CenterLayout />}>
                    <Route path="/auth" element={<Login />} />
                    <Route path="/auth/register" element={<Register />} />
                </Route>
                <Route path="/drons" element={<NormalLayout />}>
                    <Route path="/drons/new" element={<NewDron />} />
                    <Route path="/drons:id" element={<Drons />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
