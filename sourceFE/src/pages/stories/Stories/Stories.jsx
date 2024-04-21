import React from 'react'
import { useParams } from 'react-router-dom'
import HeaderStory from './HeaderStory';
const Stories = () => {
  let { idCate } = useParams();

  let data = {
    name: 'The Imbecile Lord Is Married to Five Beautiful Goddess',
    src: 'https://anhanime.com/wp-content/uploads/2023/11/Anh-Gojo-Satoru-dep.jpg',
    content: '\tThe story revolves around an average man living in a world where mythical creatures like vampires coexist with humans.One day, he stumbles upon three stunningly beautiful women, each possessing an otherworldly allure.As he gets to know them, he discovers their remarkable secret: they are vampires.\n' +
    '\tThe protagonist, a young man living in a world where vampires and humans coexist, stumbles upon three stunningly beautiful women, each possessing an otherworldly allure.As he gets to know them, he discovers their remarkable secret: they are vampires. \n' +
    '\tInitially hesitant but undeniably drawn to their charm, the protagonist finds himself entangled in their world of darkness and desire.Despite his reservations, he becomes romantically involved with all three women, each offering him a unique connection and perspective on their vampire existence.\n'+
    '\tHowever, as their relationships deepen, the protagonist begins to uncover the complexities of vampire society, filled with power struggles, ancient rivalries, and hidden dangers.He learns that being with these women means confronting not only the allure of immortality but also the shadowy threats lurking in the darkness.\n'+    
    '\tAs the story progresses, the protagonist finds himself torn between his growing affection for the vampire women and the realization of the risks involved.He must navigate treacherous waters, balancing his love for them with the need to protect himself and those he cares about from the perils of the vampire world.\n'+
    '\tThroughout his journey, the protagonist faces numerous challenges, including battles with rival vampire factions, moral dilemmas about the nature of good and evil, and the complexities of his own desires and emotions.Ultimately, he must make difficult choices that will determine not only his fate but also the fate of those he loves.\n'+    
    '\tIn essence, "My Three Wives Are Beautiful Vampires" is a captivating tale of love, danger, and self- discovery set in a world where the line between humanity and monstrosity is blurred, and the bonds forged in darkness are as seductive as they are perilous.',
    author:'David Thome'
  }

  const sentenceList = data?.content.split('\n').map((sentence, index) => (
    <p className='indent-8 mt-6 text-wrap hover:text-blue-400 italic' key={index}>{sentence}</p>
  ));

return (
  <div className='p-4 w-[1080px] mx-auto bg-slate-50'>
    <HeaderStory name={data.name} src= {data.src} author ={data.author}/>
    <div className='text-[20px] mx-auto px-8 break-words '>
    {sentenceList}
    </div>
  </div>
)
}

export default Stories