import { Provider } from "react-redux";
import Home from "./components/Home";
import { store } from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import WeekDays from "./components/WeekDays";

function App() {

  const router = createBrowserRouter([
    {
    path:'/',element:<Home/>,  
  },
  {path:'/habitList/:id',element:<WeekDays />}
  
])
  
  return (
    <>
    <Provider store={store}>
    <RouterProvider router={router}>
    
      <Home />
    
    </RouterProvider>
    </Provider>
   
    </>
  );
}

export default App;
