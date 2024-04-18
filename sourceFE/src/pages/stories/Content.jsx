import React from 'react';
import { useParams } from 'react-router-dom';
import './css/Content.css';
import Tag from '../../components/Tags/Tag';
import Comment from '../../components/Comments/Comment';
const Content = () => {
  let { idCate } = useParams();

  let data = {
    name: 'The Imbecile Lord Is Married to Five Beautiful Goddess',
    synopsis: 'Did I really die?\nCain Lisworth woke up in the adventurer guild, he had returned to the start of his journey after being killed by the cosmos guards.\n Armed with his knowledge, he started his life once again trying to break the heavenly orders and escape the mortal world.\navigatorThis time, without mistakes he will raise back to the top and reclaim his throne as the strongest enchanter in history!\n****\n\nThis story finally has a Discord server. Please visit it to see character art, or demand art to be created for a specific character.\nOnly ask how someone looks, and I will get it out.',
    src: 'https://book-pic.webnovel.com/bookcover/23124855606295305?imageMogr2/thumbnail/150&imageId=1698747892444'
  };

  return (
    <div className="containerCard w-10/12 mx-auto  "> 
      <div className="flex bg-white size-4/5  w-full bg-slate-200 rounded-lg">
        <div className="ml-3 p-3  image flex-initial w-1/2">
          <img className="rounded" src="https://anhanime.com/wp-content/uploads/2023/11/Anh-Gojo-Satoru-dep.jpg" />
        </div>
        <div className="text flex-initial w-1/2 mt-5 text-xl">
          <h1>{data.name}</h1>
          <p>Fantasy <span>876 Chapters</span></p>
          <p>3.4M Views</p>
          <p>Author: Alen_Tanor</p>
          <p>3.98 (48 ratings)</p>
          <div className="icons">
            <i className="fas fa-comments"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-share-alt"></i>
            <i className="fas fa-thumbs-up"></i>
          </div>
        </div>
      </div>
      <div className="flex  size-4/5 w-full border-y-4 my-10"> 
        <div className="text flex-initial w-2/3 my-5 ">
          <h1 className="font-bold ">About</h1>
          <p className='text-xl font-light'>Synopsis </p>
          <p className='italic text-xl'>{data.synopsis}</p>
         
        </div>
      </div>
      <div className="flex size-4/5 w-full border-b-4 "> 
        <div className="text flex-initial w-2/3 mb-5 ">
          <h1 className="font-bold ">Tags</h1>
          <div className='mt-2'>
          <Tag></Tag>
          </div>
        </div>
      </div>
      <div className="flex size-4/5 w-full border-b-4 "> 
        <div className="text flex-initial w-2/3 mb-5 ">
          <h1 className="font-bold ">Rating</h1>
          <div className='mt-2'>
          <Comment/>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Content;
