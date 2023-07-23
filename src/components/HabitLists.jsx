import style from "../style/habitlists.module.css";
import List from "./List";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { habitActions } from "../redux/habitReducer";
import { habitSelector } from "../redux/habitReducer";
import { useEffect } from "react";

const HabitLists = ({showView,setShowView})=>{
    const habits = useSelector(habitSelector);
    
    return(
        <>
        <div className={style.outerDiv}>
            <ul>
                {habits.map((habit,index)=>{
                    return(
                        <>
                        <List key={index} habit={habit} showView={showView} setShowView={setShowView}/>
                        </>
                    )
                })}
            </ul>
        </div>
        </>
    )
};

export default HabitLists;