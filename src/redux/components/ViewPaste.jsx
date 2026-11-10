import React from 'react'
import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { removeFromPastes } from '../pasteSlice';
import toast from 'react-hot-toast';

const ViewPaste = () => {
  const {id}=useParams();
  const allPastes=useSelector((state)=>state.paste.pastes)
  const paste=pastes.filter((p)=>p._id===id)[0];
  console.log("final paste:",paste);
  return (
    <div>
     <div className="flex flex-row gap-7 place-content-between">
     <input className='p-1 rounded-2xl mt-2 w-[66%] pl-4'
     type='text'
     placeholder='enter title here'
     value={paste.title} 
     disabled
     //iski andar ki value means joh likha hae usko aap title ke  sath attach krdo
     onChange={(e)=>setTitle(e.target.value)}
     // jesse hi kuch change hoga woh isme wahi value store krwa lengae

     />   
     {/* humnae phle title input box banaya hae */}

   
    </div>

    <div className="mt-8">
       <textarea 
        className="rounded-2xl mt-4,min-w-[500px] p-4"
         value={paste.content}
         //iski andar ki value means joh likha hae usko aap value ke  sath attach krdo
         placeholder="Enter content here"
         onChange={(e)=>setValue(e.target.value)}
         rows={20}
         />
    </div>

    </div>
  );
};
 
export default ViewPaste
