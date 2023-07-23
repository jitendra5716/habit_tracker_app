import { Link } from "react-router-dom";
import style from "../style/list.module.css";
import { useDispatch } from "react-redux";
import { habitActions } from "../redux/habitReducer";
import { useEffect } from "react";

const List = ({habit,showView,setShowView})=>{
    const dispatch = useDispatch();
    let countDone = 0;
    const today=new Date();
    const todayDay=today.getDay();
    for (let i = 0; i < habit.weekLog.length; i++) {
        if(habit.weekLog[i].isDone===true){
          countDone++;
        }
      }
    useEffect(()=>{
        setShowView(false);
    },[habit])
    
    const setId=()=>{
        localStorage.setItem("id",habit.id)
        // navigate("/week-view");
      }
    return(
        <>
        <li className={style.listDiv}>
            <div className={style.iconDiv}>
            <img className={style.icon} src="https://cdn-icons-png.flaticon.com/128/9741/9741158.png" alt="icon"/>
            <h4>{habit.name}</h4>
            </div>
            <p className={style.progressPara}>{countDone}/{todayDay+7} days</p>
            <div>
                <Link to={`/habitList/${habit.id}`}>
                <button className={style.viewDetails} onClick={setId}>View Details</button>
                </Link>
                
                <img onClick={()=>dispatch(habitActions.edit(habit.id))} className={style.edit} src="https://cdn-icons-png.flaticon.com/128/1142/1142920.png" alt="edit" />
                <img onClick={()=>dispatch(habitActions.delete(habit.id))} className={style.delete} src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" alt="delete" />
            </div>
        </li>
        </>
    )
};

export default List;