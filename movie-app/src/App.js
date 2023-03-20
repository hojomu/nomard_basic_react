import Home from "./routes/Home";
import Detail from "./routes/Detail";
import {BrowserRouter, Route, Routes , Link} from "react-router-dom";

function App(){
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/movie">Detail</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movie/:id" element={<Detail/>}/>
      </Routes>
      <footer>footer 입니다.</footer>
    </BrowserRouter>
  );
}

export default App;

// function App() {
  // return <Router>
  //   <Switch>
  //     <Route path="/movie">
  //       <Detail />
  //     </Route>
  //     <Route path="/">
  //       <Home />
  //     </Route>
  //   </Switch>
  // </Router>  
//}