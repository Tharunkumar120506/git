import {createContext} from 'react';
export const ArrContext=createContext();
export const ArrProvider=({children})=>{
    const info={
        name:'Tharun1234',
        age:'19',
        DOB:'12-05-2006',
        Dep:'ECE'
    }
    return(
        <ArrContext.Provider value={info}>
          {children}
        </ArrContext.Provider>
    )
}