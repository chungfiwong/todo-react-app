import React from "react";
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import Menu from './components/Menu';
import Create from "./components/Create";
import Update from "./components/Update";
import Home from "./components/Home";
import Pnf from "./components/pnf"

function App(props){
    return(
        <BrowserRouter>
            <Menu/>
            <ToastContainer theme={"colored"} position={"bottom-right"}/>
            <Routes>
                 <Route path={`/`} element={<Home/>}></Route>
                <Route path={`/create`} element={<Create/>}>Create</Route>
                <Route path={`/update/:id`} element={<Update/>}>Update</Route> 
                <Route path={`/*`} element={<Pnf/>}/>   
            </Routes>
        </BrowserRouter>
    )
}

export default App