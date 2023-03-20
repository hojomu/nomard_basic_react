import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
{
   path: "",
   element: <Home />,
},
{
   path: "/movie",
   element: <Detail />,
},
]);
  

function App() {
  return ;
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