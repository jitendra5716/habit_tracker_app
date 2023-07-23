import style from "../style/addHabit.module.css";
import { useState } from "react";
import { habitSelector } from "../redux/habitReducer";
import { habitActions } from "../redux/habitReducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const AddHabit = ()=>{
    const [habit,setHabit] = useState('');
    const selector = useSelector(habitSelector);
    const dispatch = useDispatch();
    const handleAddHabit = (e)=>{
        e.preventDefault();
        dispatch(habitActions.add(habit));
        setHabit('');
        
    }
    return(
        <>
        <div className={style.outerDiv}>
            <form>
                <label>Enter Your Habit</label>
                <div>
                <input onChange={(e)=>setHabit(e.target.value)} value={habit} className={style.inputField} type="text" required placeholder="Enter Habit" name="habit"/>
                <button onClick={handleAddHabit} type="submit" className={style.addHabitBtn}>Add habit</button>
                </div>
                
            </form>
        </div>
        
        </>
    )
};

export default AddHabit;