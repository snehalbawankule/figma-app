import { Routes} from 'react-router-dom';
import Home from '../components/Home';
//import Splash from './all/component/Splash';
import {Route} from 'react-router-dom';
import Registration from '../components/Registration';
import Login from '../components/Login';
import { Component } from 'react';
//import Splash from './all/components/splash';
class App extends Component {
  render(){
  return(
    <>
      
     <Routes>
     <Route exact path='/' component={Registration} />
     <Route exact path='/home' component={Home} />
     <Route exact path='/login' component={Login} />
   </Routes>
   <Home/>
  </>
    
  )
  }
};
export default App;