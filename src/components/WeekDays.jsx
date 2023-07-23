import style from "../style/weekdays.module.css";
import Day from "./Day";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { habitSelector } from "../redux/habitReducer";
const WeekDays = ()=>{
    const selector = useSelector(habitSelector);
    const params = useParams();
    let res = selector.filter((habit,i)=>(habit.id==params.id));
    return(
        <>
        <div className={style.outerDiv}>
            <h1>{res[0].name}</h1>
            <div className={style.innerDiv}>
                {res[0].weekLog.map((day,i)=>{
                    return(
                        <>
                        <Day day={day} index={i}/>
                        </>
                    )
                })}
            </div>
            <div className={style.backHomeDiv}>
                <Link to="/">     
            <button className={style.homeBackBtn} >Back to Home Page</button>
            </Link>
            </div>
            
        </div>
        </>
    )
};

export default WeekDays;