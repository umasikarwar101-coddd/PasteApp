import React,{useEffect, useState} from 'react'
import{useSearchParams} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import {addToPastes,updateToPastes} from '../pasteSlice'

const Home = () => {
    const[title,setTitle]=useState(''); // title area ke andar li value ko isse attach kr dea
    const[value,setValue]=useState(''); // text area ke andar li value  ko isse attach krenge
    const[searchParams,setSearchParams]=useSearchParams();  //humae id nikalni thi because humae ek hi note percreate and updatekrne the
    const pasteId=searchParams.get("pasteId");// humnae id nikal li
    const dispatch=useDispatch(); //store mae joh slice methods han unko use krnahae isliye yeh liye han
    const allPastes=useSelector((state)=>state.paste.pastes);

    useEffect(()=>{
        if(pasteId){
          const paste=allPastes.find((p)=>p._id===pasteId);
          console.log("page found")
          setTitle(paste.title)
          setValue(paste.content);
        }
      },[pasteId])
    function createPaste(){ // yeh function ek paste bana rhahae andpasteid hae toupdate paste ko slice se fetch kr rha hae otherwise addtopastes kocall kr rha hae and then clean bhi kr rha haesubko
      const paste={
        title:title,
        content:value,
        _id:pasteId||
        Date.now().toString(36), // agarid nhihae already toh yha  per aap banaloh
        createdAt:new Date().toISOString(),  //date yha per set kr doh
      }
      
      if(pasteId){
         //update
           dispatch(updateToPastes(paste));  
      }
      else{
        //create
        dispatch(addToPastes(paste));
         
      }
      //after creation or updation
      setTitle('');
      setValue('');
      setSearchParams({});
    }
  return (
    <div>
     <div className="flex flex-row gap-7 place-content-between">
     <input className='p-1 rounded-2xl mt-2 w-[66%] pl-4'
     type='text'
     placeholder='enter title here'
     value={title} 
     //iski andar ki value means joh likha hae usko aap title ke  sath attach krdo
     onChange={(e)=>setTitle(e.target.value)}
     // jesse hi kuch change hoga woh isme wahi value store krwa lengae

     />   
     {/* humnae phle title input box banaya hae */}

    <button  
    onClick={createPaste} 
    // createpaste function ko bulayegi
    className='p-2 rounded-2xl mt-2'>
       {
        pasteId?"Update my paste":"Create My paste"
       }
     </button> 
     {/* yeh button hae createpaste wali  ismae hum apni buttion ko id kae basis per work krwayenge if exist then aap update otherwise create*/}
    </div>

    <div className="mt-8">
       <textarea 
        className="rounded-2xl mt-4,min-w-[500px] p-4"
         value={value}
         //iski andar ki value means joh likha hae usko aap value ke  sath attach krdo
         placeholder="Enter content here"
         onChange={(e)=>setValue(e.target.value)}
         rows={20}
         />
    </div>

    </div>
  );
};

export default Home
