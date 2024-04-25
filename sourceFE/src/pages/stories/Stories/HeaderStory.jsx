import React from 'react'
import { Link } from 'react-router-dom'
import VerticalNavbar from '../../../components/Menu/VerticalNavbar'

const HeaderStory = (props) => {
    return (
        <div className='h-[600px]'>
            <div className='flex'>
                <div className='absolute inset-x-0 top-30'>
                    <div className='flex justify-center overflow-hidden items-top '>
                        <div className='flex rounded w-[212px] h-[288px] border-2 border-inherit p-1'>
                            <img className="w-[212px] h-[276px] object-cover rounded hover:scale-105 transition-transform duration-300"
                                src={props.src} />
                        </div>
                    </div>
                    <div className='flex justify-center py-6 ml-10 font-semibold font-poppins'>
                        <p className='text-[26px] w-1/3 self-center' >{props.name}</p>
                    </div>
                    <div className='flex justify-center  font-serif'>
                        <div className='flex  font-bold text-[20px]'>
                            <p className='mr-2'>Author :</p>
                            <Link >
                                <p className=' self-center font-semibold underline text-emerald-500 hover:text-emerald-300' >{props.author}</p>
                            </Link>
                        </div>
                    </div>
                    <div className='flex justify-center  py-10'>
                        <hr className="mt-auto  w-2/5  border-t border-gray-300" />
                    </div>
                </div>
               
            </div>

        </div>

    )
}

export default HeaderStory