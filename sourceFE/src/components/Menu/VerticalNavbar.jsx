import React from 'react';

const VerticalNavbar = (props) => {
    
    return (
        <div className="fixed right-4  flex flex-col justify-center place-items-center">
            {
                props.list.map((item, index) => (
                    <button  key={index} className="py-2 px-2 bg-gray-200 text-gray-800 hover:bg-gray-300 flex items-center"
                    onClick={item.onClick}>
                        {item.code}
                        {/* <span className="ml-2">{item.name}</span> */}
                    </button>
                ))
            }
        </div>
    );
}

export default VerticalNavbar;
