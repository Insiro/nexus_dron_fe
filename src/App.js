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
import UserInfo from './pages/userinfo';
import UserPage from './pages/userPage';
import { EditDron } from './pages/editDron';
import NewNotice from './pages/notice/newNotice'
import Notice from './pages/notice/notice'
import NoticeId from './pages/notice/noticeFile'
import EditNotice from './pages/notice/editNotice'

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
                        <Route path="/drons/userinfo" element={<UserInfo />} />
                        <Route path="/drons/userlist" element={<UserPage/>}/>
                        <Route path="/drons" element={<Main />} />
                        <Route path="/drons/new" element={<NewDron />} />
                        <Route path="/drons:id" element={<Drons />} />
                    </Route>
                    <Route>
                        <Route path="/notice" element={<Notice />} />
                        <Route path="/notice/new" element={<NewNotice />} />
                        <Route path="/notice/:id" element={<NoticeId />} />
                        <Route path="/notice/edit/:id" element={<EditNotice />} />
                    </Route>
                </Routes>
            </Provider>
        </BrowserRouter>
    );
}
export default App;