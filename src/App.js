import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddService from './Pages/AddService/AddService';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Update from './Pages/Home/Update/Update';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageServices from './Pages/ManageServices/ManageServices';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/service/:id' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/manageService" element={
          <RequireAuth>
            <ManageServices></ManageServices>
          </RequireAuth>
        }></Route>
        <Route path="/AddService" element={
          <RequireAuth>
            <AddService></AddService>
          </RequireAuth>
        }></Route>
        <Route path="/:id" element={
          <RequireAuth>
            <Update></Update>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
