import { createSlice } from "@reduxjs/toolkit";

let id =1;

const habitSlice = createSlice({
    name:'habits',
    initialState:[],
    reducers:{
        add:(state,action)=>{
            const today = new Date();
            let day = today.getDate()-today.getDay();
            const month = today.getMonth();
            const year = today.getFullYear();
            
            const habit = {
                id:id++,
                name:action.payload,
                weekLog:[
                    {
                        id:0,
                        day:"Monday",
                        dd:day-6,
                        mm:month,
                        yyyy:year,
                        isDone:"",
                    },
                    {
                        id:1,
                        day:"Tuesday",
                        dd:day-5,
                        mm:month,
                        yyyy:year,
                        isDone:"",
                    },
                    {
                        id:2,
                        day:"Wednesday",
                        dd:day-4,
                        mm:month,
                        yyyy:year,
                        isDone:"",
                    },
                    {
                        id:3,
                        day:"Thursday",
                        dd:day-3,
                        mm:month,
                        yyyy:year,
                        isDone:"",
                    },
                    {
                        id:4,
                        day:"Friday",
                        dd:day-2,
                        mm:month,
                        yyyy:year,
                        isDone:"",
                    },
                    {
                        id:5,
                        day:"Saturday",
                        dd:day-1,
                        mm:month,
                        yyyy:year,
                        isDone:"",
                    },
                    {
                        id:6,
                        day:"Sunday",
                        dd:day,
                        mm:month,
                        yyyy:year,
                        isDone:"",
                    },
                ]
            }
            const tempHabits = [...state,habit];
            return tempHabits;
        },
        edit:(state,action)=>{
            const tempHabits = state.map((habit,i)=>{
                if(habit.id==action.payload){
                    // habit.id = state.id;
                    habit.name=prompt("Enter text");
                    // habit.weekLog=[state.weekLog];
                }
            })
            // return tempHabits;
        },
        delete:(state,action)=>{
            const tempHabits = state.filter((habit)=>(habit.id !==action.payload));
            return tempHabits;
        },
        habitDone:(state,action)=>{
            let tempHabits = state;
            for(let i=0; i<tempHabits.length;i++){
                if(tempHabits[i].id===Number(localStorage.getItem('id'))){
                    tempHabits[i].weekLog[action.payload].isDone = true;
                }
            }
            return tempHabits;
        },
        habitNotDone:(state,action)=>{
            let tempHabits = state;
            for(let i=0; i<tempHabits.length; i++){
                if(tempHabits[i].id===Number(localStorage.getItem('id'))){
                    tempHabits[i].weekLog[action.payload].isDone = false;
                }
            }
            return tempHabits;
        },
        habitNone:(state,action)=>{
            let tempHabits = state;
            for(let i=0; i<tempHabits.length; i++){
                if(tempHabits[i].id===Number(localStorage.getItem('id'))){
                    tempHabits[i].weekLog[action.payload].isDone ="";
                }
            }
            return tempHabits;
        }
    }
});

export const habitReducer = habitSlice.reducer;


export const habitActions = habitSlice.actions;


export const habitSelector = (state)=>state.habitReducer;