import style from "../style/view.module.css";

const View  = ()=>{
    return(
        <>
        <div className={style.outerDiv}>
            <h1>Habit Tracker App</h1>
            <div className={style.imgDiv}>
            <img src="https://cdn-icons-png.flaticon.com/128/3588/3588658.png" alt="img"></img>
            </div>
           
            {/* <img src="https://cdn-icons-png.flaticon.com/128/6497/6497485.png"></img> */}
        </div>
        </>
    )
};

export default View;