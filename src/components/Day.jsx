import style from "../style/day.module.css";
import { useDispatch } from "react-redux";
import { habitActions } from "../redux/habitReducer";

const Day = ({day,index})=>{
    const today = new Date();
    const todayDay = today.getDay();
    const dispatch = useDispatch();
    const date = new Date(day.yyyy,day.mm,day.dd);
    const markToDone = ()=>{
        if(day.id<todayDay){
            alert("You can not change your next day status");
            return;
        }
        dispatch(habitActions.habitDone(day.id));
    }
    const markToNotDone = ()=>{
        if(day.id<todayDay){
            alert("You can not change your next day status");
            return;
        }
        dispatch(habitActions.habitNotDone(day.id));
    }
    const markToNone = ()=>{
        if(day.id<todayDay){
            alert("You can not change your next day status");
            return;
        }
        dispatch(habitActions.habitNone(day.id));
    }
    

    return(
        <>
       <div className={style.outerDiv}>
            <h5 className="text-center">{day.day}</h5>
            <p className="text-center">{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</p>
            <div className={style.iconDiv}>
            <i className={day.isDone===true?"fa-solid fa-circle-check circle-icon active":"fa-solid fa-circle-check circle-icon"} onClick={markToDone}></i>
            <i className={day.isDone===false?"fa-solid fa-circle-xmark circle-icon active":"fa-solid fa-circle-xmark circle-icon"} onClick={markToNotDone}></i>
            <i className={day.isDone===""?"fa-solid fa-circle-minus circle-icon active":"fa-solid fa-circle-minus circle-icon"} onClick={markToNone}></i>
            </div>
       </div>
        </>
    )
};

export default Day;