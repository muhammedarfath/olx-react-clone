
import './App.css';
import Category from './Pages/Category/Category';
import HomePage from './Pages/Home/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import SellForm from './Pages/SellForm/SellForm';
import ProductProvider from './Pages/Home/ProductContext';
import ViewContext from './Pages/Home/ViewContext';
import SinglePost from './Pages/SinglePost/SinglePost';


function App() {
  return (

      <ViewContext>
        <Router>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/post' element={<Category/>}/>
              <Route path='/sell' element={<SellForm/>}/>
              <Route path='/singlepost' element={<SinglePost/>}/> 
            </Routes>
        </Router>
      </ViewContext>

  );
}

export default App;
