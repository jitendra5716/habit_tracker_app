import { Link, Outlet } from "react-router-dom";
import style from "../style/navbar.module.css";
import { unhover } from "@testing-library/user-event/dist/hover";

const Navbar = ({showForm, setShowForm,showView,setShowView})=>{
   const  handleAddHabit = ()=>{
    let newShowForm = !showForm;
        setShowForm(newShowForm);
      let newShowView = !showView;
        setShowView(newShowView);
    }
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-dark ">
  <div class="container-fluid">
    <a class="navbar-brand text-light" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/">
          <a class="nav-link active text-light" aria-current="page" href="#"></a>
          </Link>
          
        </li>
        <li class="nav-item">
          <Link to="/" >
          <a class="nav-link text-light " style={{textDecoration:'unhover'}} className="homeLink" href="#">Home</a>
          </Link>
         
        </li>
        
      </ul>
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <button onClick={handleAddHabit} className={style.addHabit} class="me-5 p-1 btn btn-outline-secondary text-light">{showForm?'Cancel':'Add Habit'}</button>
    </div>
  </div>
</nav>
<Outlet />
        </>
    )
};

export default Navbar;