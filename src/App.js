import './App.css';
import {useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  const [progress, setProgress] = useState(0)
  return (
    <>
      <Router>
        <Navbar />
        
        <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)} />

        <Switch>
          {/* <Route path="/about"> 
            <About />cd 
          </Route> */}
          <Route exact path="/"><News setprogress={setProgress} key="general" category="general" country="in" page="1" pagesize="15" /></Route>
          <Route exact path="/general"><News setprogress={setProgress} key="general" category="general" country="in" page="1" pagesize="15"/></Route>
          <Route exact path="/entertainment"><News setprogress={setProgress} key="general" category="entertainment" country="in"pagesize="15" page="1" /></Route>
          <Route exact path="/sports"><News setprogress={setProgress} key="sports" category="sports" country="in"pagesize="15"  page="1" /></Route>
          <Route exact path="/health"><News setprogress={setProgress} key="health" category="health" country="in"pagesize="15"  page="1" /></Route>
          <Route exact path="/technology"><News setprogress={setProgress} key="technology" category="technology" pagesize="15" country="in" page="1" /></Route>
          <Route exact path="/business"><News setprogress={setProgress} key="business" category="business" pagesize="15" country="in" page="1" /></Route>
          <Route exact path="/science"><News setprogress={setProgress} key="science" category="science" pagesize="15" country="in" page="1" /></Route>
          
        </Switch>



      </Router>

    </>


  );
}

export default App;
