import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import './index.css';

import store from './stores';

import { CenterLayout, NormalLayout } from './components/layout';
import Login from './pages/singIn';
import Register from './pages/register';
import { Drons } from './pages/drons';
import { NewDron } from './pages/newDron';
import { Main } from './pages/main';
const RootRedirector = () => {
    const user = useSelector((state) => state.user.name);
    return <Navigate to={user ? '/drons' : '/auth'} replace />;
};
function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<RootRedirector />} />
                    <Route path="/auth" element={<CenterLayout />}>
                        <Route path="/auth" element={<Login />} />
                        <Route path="/auth/register" element={<Register />} />
                    </Route>
                    <Route path="/drons" element={<NormalLayout />}>
                        <Route path="/drons" element={<Main />} />
                        <Route path="/drons/new" element={<NewDron />} />
                        <Route path="/drons:id" element={<Drons />} />
                    </Route>
                </Routes>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
