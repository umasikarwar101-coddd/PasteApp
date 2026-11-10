import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { removeFromPastes } from '../pasteSlice';
import toast from 'react-hot-toast';

const Paste = () => {
  const pastes=useSelector((state)=>state.paste.pastes); // stateisthe wholereduxstore state.pastes referetheslice namewhat u haveused 
  const[searchTerm,setSearchTerm]=useState('');
  const dispatch=useDispatch();

  const filteredData=pastes.filter(
    (paste)=>paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  function handleDelete(pasteId){
     dispatch(removeFromPastes(pasteId));
  }
  return (
    <div>
     <input  className='p-2 rounded-2xl min-w-[600px] mt-5'
     type="search"
     placeholder='search here'
     value={searchTerm}
    
     onChange={(e)=>setSearchTerm(e.target.value)} />

     <div className='flex flex-col gap-5 mt-5'>
      {
        // conditional rendering krwa denihae humae iski
        filteredData.length>0 && filteredData.map((paste)=>{
          return(
            <div className='border'>
              <div>{paste.title}</div>
              <div>{paste.content}</div>
              <div className='flex flex-row gap-4 place-content-evenly'>
               <button>
                <a href={`/?pasteId=${paste?._id}`}>Edit</a>
               </button>
               <button>
                <a href={`/pastes/${paste?._id}`}> View</a>
              
               </button>
               <button onClick={()=>handleDelete(paste?._id)}>
                Delete
               </button>
               <button onClick={()=>{navigator.clipboard.writeText(paste?.content)
                toast.success("copied to clipboard")}}>
                Copy
               </button>
               <button>
                Share
               </button>
              </div>

              <div>
                {paste.createdAt}
              </div>
              
            </div>
          )
        })
      }
     </div>



    </div>
  )
}

export default Paste
