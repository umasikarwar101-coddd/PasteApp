import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {  // agarphlese iss id sedata local storage mae store hae toh woh laeloh nhi toh empty array man loh
pastes:localStorage.getItem("pastes")?JSON.parse(localStorage.getItem("pastes")):[]

};

export const pasteSlice = createSlice({  // store createkrliya hae sliceand usme reducers (functions) dal diye han humnae
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state,action) => {
      const paste=action.payload; //yeh pura ka pura paste humae dega joh pass krwaya h humnae
      state.pastes.push(paste); //list mae apni yeh push kr diya 
      localStorage.setItem("pastes",JSON.stringify(state.pastes));// local storage mae bhi add kr do 
      toast("Paste created successfully")
    },
    updateToPastes: (state,action) => {
      const paste=action.payload;
      const index=state.pastes.findIndex((item)=>item._id===paste._id);  // finindexisbuiltinfunction
      
      if(index>=0){
        state.pastes[index]=paste;
        localStorage.setItem("pastes",JSON.stringify(state.pastes));

        toast.success("Paste updated")
      }

    },
    resetAllPastes: (state, action) => {
      state.pastes=[];
      localStorage.removeItem("pastes");
    },
    removeFromPastes:(state,action)=>{
     const pasteId=action.payload;
     console.log(pasteId);
     const index=state.pastes.findIndex((item)=>item._id===pasteId);
     if(index>=0){
      state.pastes.splice(index,1); // 1 tells the js how many items to  delete starting from that index here it is 1 meansu will only removeit
      localStorage.setItem("pastes",JSON.stringify(state.pastes));
      toast.success("paste deleted");
     }
    },
  },
});

// Automatically generated action creators
export const { addToPastes,updateToPastes,resetAllPastes,removeFromPastes} = pasteSlice.actions;

// Export the reducer to add to the store
export default pasteSlice.reducer;
