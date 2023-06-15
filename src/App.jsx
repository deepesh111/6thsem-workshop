import React from "react"; 
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./User/Home/Home";
import About from "./User/About Us/About";
import Blog from "./User/Blog/Blog";
import UserLayout from "./User/UserLayout";
import SingleBlog from "./User/Blog/SingleBlog";
import AdminLayout from "./Admin/AdminLayout";
import AdminHome from "./Admin/Home/AdminHome";
import AddBlog from "./Admin/Blog/AddBlog";
import EditBlog from "./Admin/Blog/EditBlog";
import Login from "./Auth/Login";

const App=() =>{
  return(
    <>
    <Router>
        <Routes>
          <Route path="/Login" element={<Login/>}/>

          {/* user layout starts */}
            <Route path=""element={<UserLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/blog/:id" element={<SingleBlog />}/>
                </Route>
                {/*User layout ends  */}
                {/* Admin layout starts */}
                <Route path="/admin"element={<AdminLayout/>}>
                <Route path="Home" element={<AdminHome/>}/>
                <Route path="add" element={<AddBlog/>}/>
                <Route path="edit/:id" element={<EditBlog/>}/>
                </Route>
            
                {/* Admin layout ends */}

            
        </Routes>
    </Router>
  </> 
  );
  }
    
export default App;
