import React from 'react'
import { Link } from 'react-router-dom';

const ListChapters = (props) => {
  console.log(props.list);
  return (
    <div className="fixed mr-4 mt-4 bg-gray-200 right-0 border-neutral-500 rounded-md border-solid border-2 border-indigo-600">
       <div className='flex flex-col items-center justify-center mt-4'>
          <p className='text-[25px] '>Table of Contents</p>
      </div>
      <div className="max-w-md mx-auto bg-gray-100 p-2 shadow-md max-h-[400px] overflow-y-auto mt-4">
        <ul className=' sticky  text-[18px]  p-2'>
          {props.list.map((item, index) => (
            <li key={index} className='py-4  flex '>
              {item.name}
              <Link className='ml-2 hover:text-red-600 hover:underline decoration-1'> {item.direc}</Link>
            </li>
          ))}
        </ul>
        
      </div>

    </div>
  )
}

export default ListChapters