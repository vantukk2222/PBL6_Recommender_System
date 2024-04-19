import React from 'react'
import { useState } from 'react';
const RatingBar = () => {
    const [rating, setRating] = useState(null);
    const [hover , setHover] = useState(null);
    return (
        <div className='flex'>
            <p className='text-xl font-semibold' >Your rating : </p>
            <div className="flex flex-col gap-4  pl-5">
                {/* <Rating unratedColor="amber" ratedColor="amber" /> */}
                <div className="flex items-center">
                    {[...Array(5)].map((star, index) =>{

                        const currentRating = index +1;
                        return  (
                            <label>
                                <input
                                    type='radio'
                                    name='rating' 
                                    value={currentRating}
                                    onClick={()=> setRating(currentRating)}
                                    className='hidden'
                                />
                                <svg key={index}  xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}
                                    stroke="currentColor"
                                    onMouseEnter={()=> setHover(currentRating)}
                                    onMouseLeave={()=> setHover(null)}
                                    className={currentRating <= (hover || rating) ? "cursor-pointer w-6 h-6 text-yellow-400 ms-1 " : "cursor-pointer w-6 h-6 text-bronze-500 ms-1 "}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                            </label>
    
                        );
                    }
                   )}


                    {/* <svg className="w-6 h-6 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg> */}


                </div>
            </div>
        </div>
    );
}

export default RatingBar
