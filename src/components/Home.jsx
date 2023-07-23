import Navbar from "./Navbar"
import AddHabit from "./AddHabit"
import { useState } from "react";
import HabitLists from "./HabitLists";
import View from "./View";
const Home = ()=>{
    const[showForm, setShowForm] = useState(false);
    const [showView,setShowView] = useState(true);
    return(
        <>
        <Navbar showForm={showForm} setShowForm={setShowForm} showView={showView} setShowView={setShowView}/>
        {showForm?<AddHabit />:null}
        {showView?<View />:null}
        
        <HabitLists showView={showView} setShowView={setShowView}/>
        </>
    )
}

export default Home;