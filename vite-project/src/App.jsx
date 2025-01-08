import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import ByCatagorisPage from "./Pages/ByCatagorisPage.jsx";
import DetailsPage from "./Pages/DetailsPage.jsx";
const App = () => {
    return (
        <div className={'bg-white'}>
           <BrowserRouter>
               <Routes>
                   <Route path={'/'} element={<HomePage/>}/>
                   <Route path="/byCategory/:categoryID" element={<ByCatagorisPage/>}/>
                   <Route path={'/details/:postID'} element={<DetailsPage/>}/>
               </Routes>
           </BrowserRouter>

        </div>
    );
};

export default App;