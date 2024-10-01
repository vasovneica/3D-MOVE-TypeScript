import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Route,
} from "react-router-dom";
import Layout from './components/Layout.tsx'
import HomePage from './pages/HomePage';
import ModelsPage from './pages/modelsPage/ModelsPage.tsx';
import HowUsePage from './pages/howUsePage/HowUsePage';
import FullModelPage from './pages/fullModelPage/FullModelPage.tsx';
import ErrorPage from "./pages/errorPage/ErrorPage.tsx";


const router = createBrowserRouter(createRoutesFromElements(

        <Route path='/' element={<Layout />}>
            <Route path='/' element={<Navigate to='/home' replace />} />
            <Route path='/home' index element={<HomePage />} />
            <Route path='/api/models/*' element={<ModelsPage />} />
            <Route path='model/:id' element={<FullModelPage  />}/>
            <Route path='/howusepage' element={<HowUsePage />} />
            <Route path='*' element={<ErrorPage/>} />
        </Route>
    
));

export default router;
