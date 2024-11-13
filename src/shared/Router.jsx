import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import Details from "../pages/Details";


const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        {/* Routs */}
        <Route path="/" element={<Home/>}/>
        <Route path="/dex" element={<Dex/>}/>
        <Route path="/detail/:id" element={<Details/>}/>        
      </Routes>
    </BrowserRouter>
  );
};

export default Router;