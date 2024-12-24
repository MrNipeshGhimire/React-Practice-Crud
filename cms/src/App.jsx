import { BrowserRouter, Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import CreateProduct from "./pages/CreateProduct"
import EditProduct from "./pages/EditProduct"
import SingleProduct from "./pages/SingleProduct"
import Table from "./pages/Table"


function App(){
  return(
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/create" element={<CreateProduct/>} />
      <Route path="/edit/:id" element={<EditProduct/>} />
      <Route path="/single/:id" element={<SingleProduct/>} />
      <Route path="/table" element={<Table/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
