import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Listearticles from "./component/articles/Listearticles";
import Insertarticle from "./component/articles/Insertarticle";
import Editcategorie from "./component/categories/Editcategorie";
import Viewarticle from "./component/articles/Viewarticle";
import Listecategorie from "./component/categories/Listecategorie";
import Insertcategorie from "./component/categories/Insertcategorie";
import Viewscategorie from "./component/scategories/Viewscategorie";
import Listescategorie from "./component/scategories/Listescategorie";
import Insertscategorie from "./component/scategories/Insertscategorie";
import Editscategorie from "./component/scategories/Editscategorie";
import Menu from "./component/Menu";

function App  ()  {
  return (
    <div>
    <Router>
      <Menu></Menu>
    <Routes>
    <Route path="/articles" element={<Listearticles/>}/>
    <Route path="/articles/add" element={<Insertarticle/>}/>
    <Route path="/article/edit/:id" element={<Editcategorie/>}/>
    <Route path="/article/view/:id" element={<Viewarticle/>}/>
    <Route path="/categories" element={<Listecategorie/>}/>
    <Route path="/categories/add" element={<Insertcategorie/>}/>
    <Route path="/categories/edit/:id" element={<Editcategorie/>}/>
    <Route path="/categories/view/:id" element={<Viewscategorie/>}/>
    <Route path="/scategories" element={<Listescategorie/>}/>
    <Route path="/scategories/add" element={<Insertscategorie/>}/>
    <Route path="/scategories/edit/:id" element={<Editscategorie/>}/>
    <Route path="/scategories/view/:id" element={<Viewscategorie/>}/>
    </Routes>
    </Router>
    </div>
  )
}

export default App
