import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderStory from "./HeaderStory";
import VerticalNavbar from "../../../components/Menu/VerticalNavbar";
import ListChapters from "../chapters/ListChapters";
import { getNovel } from "../../../ultis/utilsNovel";
import { proxyUrl } from "../../../api/apiProxy";
const Stories = () => {
  let { Id } = useParams();
  console.log("id", Id);
  let data = {
    name: "The Imbecile Lord Is Married to Five Beautiful Goddess",
    src: "https://anhanime.com/wp-content/uploads/2023/11/Anh-Gojo-Satoru-dep.jpg",
    content:
      "\tThe story revolves around an average man living in a world where mythical creatures like vampires coexist with humans.One day, he stumbles upon three stunningly beautiful women, each possessing an otherworldly allure.As he gets to know them, he discovers their remarkable secret: they are vampires.\n" +
      "\tThe protagonist, a young man living in a world where vampires and humans coexist, stumbles upon three stunningly beautiful women, each possessing an otherworldly allure.As he gets to know them, he discovers their remarkable secret: they are vampires. \n" +
      "\tInitially hesitant but undeniably drawn to their charm, the protagonist finds himself entangled in their world of darkness and desire.Despite his reservations, he becomes romantically involved with all three women, each offering him a unique connection and perspective on their vampire existence.\n" +
      "\tHowever, as their relationships deepen, the protagonist begins to uncover the complexities of vampire society, filled with power struggles, ancient rivalries, and hidden dangers.He learns that being with these women means confronting not only the allure of immortality but also the shadowy threats lurking in the darkness.\n" +
      "\tAs the story progresses, the protagonist finds himself torn between his growing affection for the vampire women and the realization of the risks involved.He must navigate treacherous waters, balancing his love for them with the need to protect himself and those he cares about from the perils of the vampire world.\n" +
      "\tThroughout his journey, the protagonist faces numerous challenges, including battles with rival vampire factions, moral dilemmas about the nature of good and evil, and the complexities of his own desires and emotions.Ultimately, he must make difficult choices that will determine not only his fate but also the fate of those he loves.\n" +
      '\tIn essence, "My Three Wives Are Beautiful Vampires" is a captivating tale of love, danger, and self- discovery set in a world where the line between humanity and monstrosity is blurred, and the bonds forged in darkness are as seductive as they are perilous.',
    author: "David Thome",
    chapters: [
      { name: "chapter1", direc: "direction of chapter 1" },
      { name: "chapter2", direc: "direction of chapter 2" },
      { name: "chapter3", direc: "direction of chapter 3" },
      { name: "chapter4", direc: "direction of chapter 4" },
      { name: "chapter5", direc: "direction of chapter 5" },
      { name: "chapter6", direc: "direction of chapter 6" },
      { name: "chapter7", direc: "direction of chapter 7" },
      { name: "chapter8", direc: "direction of chapter 8" },
      { name: "chapter9", direc: "direction of chapter 9" },
    ],
  };
  const [dataNovel, setDataNovel] = useState(null);

  useEffect(() => {
    getNovel(Id).then((res) => {
      setDataNovel(res);
    });
  }, []);

  const sentenceList = data?.content.split("\n").map((sentence, index) => (
    <p
      className="indent-8 mt-6 text-wrap hover:text-blue-400 italic"
      key={index}
    >
      {sentence}
    </p>
  ));
  const [showChapter, setShowChapter] = useState(false);
  const iconMenuList = [
    {
      name: "chapter",
      code: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
          />
        </svg>
      ),
      onClick: () => {
        setShowChapter(!showChapter);
      },
    },
  ];

  return (
    <div className="p-4 w-[1080px] h-full mb-20 mx-auto bg-slate-50">
      <div className="flex">
        <div className="w-screen">
          <HeaderStory
            name={dataNovel?.name}
            src={proxyUrl(dataNovel?.imageUrl)}
            author={dataNovel?.author?.name}
          />
          <div className="flex flex-col items-center justify-center text-[20px] mx-auto px-8 break-words w-full">
            {sentenceList}
          </div>
        </div>
        <div className="">
          {showChapter == true && <ListChapters list={data.chapters} />}
        </div>
      </div>
      <div className="absolute  right-2 top-24 w-20 h-screen ">
        <VerticalNavbar list={iconMenuList} />
      </div>
    </div>
  );
};

export default Stories;
