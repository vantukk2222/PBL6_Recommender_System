import React, { useEffect, useState } from "react";
import "./css/genres.css";
import PropTypes from "prop-types";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { EachItemNovelGenre } from "./EachItemNovelGenre";
export const Genres = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedGenresIndex, setSelectedGenresIndex] = useState(0);
  const [selectedGenresNovelIndex, setSelectedGenresNovelIndex] = useState(0);
  const [pathName, setPathName] = useState(location.pathname.split("/")[2]);
  const [selectedStatus, setSelectedStatus] = useState(0);
  const [selectedSort, setSelectedSort] = useState(0);

  const [selectedGenres, setSelectedGenres] = useState(
    location.pathname.split("/")[3]
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(
    pathName === "novels" ? false : true
  );
  const [isDropdownNovelOpen, setIsDropdownNovelOpen] = useState(
    pathName === "novels" ? true : false
  );
  const dataNovel = {
    novels: [
      {
        _id: 17500000000000000,
        name: "Villain Cultivator",
        description:
          "If you can reincarnate or transmigrate into a cultivation novel world and you have a choice, would you be a protagonist, an antagonist, a side character, or a mob character?\n\nAnd what would you do if you are aware that you're a character in a cultivation novel?\n\n.\n\nMao Miaomiao, a 60-year-old retired professional MMA fighter got transmigrated into a mysterious cultivation world with modern technologies. He found himself in his youthful body, and he got a system as a bonus.\n\nCliche, right?\n\n[Ding!]\n[You have received new quests]\n[Kill a native protagonist.]\n[Kill a reincarnated protagonist.]\n[Kill a transmigrated protagonist.]\n[Kill a regressed protagonist.]\n[Kill a time-traveled protagonist.]\n[Kill a resurrected protagonist.]\n\nFrom a mob character to a villain mob, from a villain mob to a villain boss, from a villain boss to a secret character, the system forced Mao Miaomiao to evolve ... and hunt every protagonist in this world.",
        chapters: "763",
        views: "6400000",
        rating: "4.62",
        powerStone: "3",
        imageUrl:
          "https://book-pic.webnovel.com/bookcover/17521596505284905?imageMogr2/thumbnail/600&imageId=1595401364693",
        author: {
          _id: 3430596567062,
          name: "DamnPlotArmor",
        },
        category: {
          _id: 3430596578133,
          name: "Eastern",
        },
        __v: 0,
      },
      {
        _id: 23600000000000000,
        name: "Hellbound Heart",
        description:
          '[WARNING: MATURE CONTENT] - [MAIN STORY IS COMPLETED] Izabelle had underestimated the fire she thought she was going to play with tonight. But how could she ever have foreseen that the man she had happened to come across with does not play with just a small fire, but a whole inferno?\n___\nExcerpt:\n"You going through this marriage with me might as well be like you digging your own grave. Because the moment you start to want more from me, I will divorce you. And the moment you break your promise and try to fight me… I will ruin you and break you apart completely. Mercilessly. You will regret ever meeting this devil tonight." His threat was given in the same soft but cold voice.\n\nBut Elle did not even flinch. Her gaze never faltered either. This man was ruthless, and she knew that clearly. His eyes that moment promised nightmares and darkness without any promise of respite.\nBut no matter what he says now, it would still not change her decision. She truly had no other choice.\n\n"I understand now…" she said quietly, steeling herself. "Since you don\'t trust that I will keep my word, how about we do this? You prepare the divorce documents beforehand now and I\'ll sign it. That way, once you decide to divorce me in the future, the papers would already have been signed and there would be no way I can trouble you about it. You would just need to send it to the lawyers and have it notarized."\n\nA heavy silence reigned before his quiet disbelieving laugh broke the silence.\n\n"I\'m at a loss for words, Princess Izabelle." He looked wickedly amused. But then he started nodding in approval. "Fine, princess. I will marry you."\n___\n\nInstagram account: kazzenlx.x\nfacebook page: author_kazzenlx\nDiscord server: https://discord.gg/UGTA3A4\n\nCover is mine so don\'t use it. Cover Art by @azihidalgo\nLogo by @gisel.arts',
        chapters: "390",
        views: "5900000",
        rating: "4.76",
        powerStone: "416",
        imageUrl:
          "https://book-pic.webnovel.com/bookcover/23583893605477005?imageMogr2/thumbnail/600&imageId=1671547250567",
        author: {
          _id: 8576491424530,
          name: "KazzenlX",
        },
        category: {
          _id: 1715298289877,
          name: "editCategory",
        },
        __v: 0,
      },
      {
        _id: 23700000000000000,
        name: "Rise Online: Return of the Legendary Player",
        description:
          "In the game Myth2, Klaus Park was already considered a top player at just 13 years old. With his advanced knowledge of the game and methods of adapting to the most varied situations, he became a world champion younger than anyone else. However, due to a tragic incident, he left his team and the gaming world a year later.\nNow, 7 years after leaving the professional scene, he returned to play the eminent VRMMORPG called Rise Online, a unique game of unrestricted freedom whose number of players already exceeds one hundred million. This game allows players to use real-world skills such as martial arts, archery, blacksmithing, or reaction time for their own benefit, along with the freedom to explore 7 colossal, mythological worlds.\nPlanning how to conquer dungeons? Fight against powerful guilds? Slay the Werewolf King? Face hordes of thousands of zombies? Have the power to revive the dead? Or discover unknown battle techniques?\nNone of this is impossible for Klaus, a legendary player, and holder of the Psych Class, allowing him to see and talk to spirits, copy abilities, cast magic items, and see the signs that no one else can see across the worlds. His real goal is to reach the throne of the paranormal world and the top of the player and guild ranks of Rise Online. No matter what is in front of him, he will be head-on with his best, be it the High Lord of Vampires or the strongest Guild Master.\n\n\n\nMain Tags: Action, Weaktostrong, Male MC, Videogame and evolution.\nSchedule: 14 chapters/week.\nChapter length: 1000 - 2000 words\n-------------------------------------------\nDiscord: https://discord.gg/bpqq9u4gS8",
        chapters: "858",
        views: "2700000",
        rating: "4.73",
        powerStone: "8",
        imageUrl:
          "https://book-pic.webnovel.com/bookcover/23702833505413805?imageMogr2/thumbnail/600&imageId=1697464277524",
        author: {
          _id: 5145894851182,
          name: "NandoFalske",
        },
        category: {
          _id: 5145894861167,
          name: "Games",
        },
        __v: 0,
      },
      {
        _id: 23100000000000000,
        name: "The Lycan's Sin",
        description:
          "[MATURE CONTENT]\n\n“Are you mating with someone?”\nStunned, she took a step back, widening the space between them. “ Excuse me?”\n“Ah…” A sigh left his lips. “ Perhaps, I need to rephrase my question. Are you f*cking someone?”\nShe sucked in a quick breath, not knowing what to say. Anger reared itself in her head, mixing with unexpected desire. Sadly, desire was winning.\nHe lifted an eyebrow, and in the next instant, he was already standing in front of her body. Her instincts kicked in. She took a couple steps back until her back hit the wall.\nThe smell of chocolates and almonds rolled between them. Entranced, she thought she smelled the sweetness of the wine but it disappeared as quickly as it came.\n“I don’t think that is any of your business, Mr. Graydon.” she made a sound of annoyance.\n“Is it not?” His breath fractured, his eyes darkened with desire.\n“No.” Her lips quivered at her obvious denial. She mustered all the courage she could, hoping he wouldn’t smell her arousal. She knew it was for naught.\nHis fingers lightly brushed her cheeks, then they trailed down her neck, lingering on her collarbone, the contact sent shivers down her spine. It awakened the primal need she had been wanting to hide since they met.\nShe wanted him.\nNo.\nShe needed him, inside her.\nHer face flushed at the thought of him taking her, preferably right against these walls.\n“You want me,” he stated. ““As much as I want you.”\nShocked by her own raw and potent yearning, she turned her head away.\n“I don’t…”\n“Shhh…” he silenced her with a finger. Then he inched closer, so close his long lashes brushed against her cheek. Her heart pounded like a drum against her chest, fast and hot in anticipation.\n“Now tell me little one… do I need to get rid of someone before I make you beg me to let you come?”\n\n......\n\nIs love worth the chaos it brings?\n\n.....\nTags: #lycans #witch #strongfemalelead #strongmalelead #norape #smut #mates #slowburn\n\n....\n\nCheck out Complete Information inside!\n\n.....\nWritten by: B.Mitchylle\nEmail: bmitchylle@gmail.com\nInsta: @b.mitchylle\nDiscord: MitchyMitch#3750\n\nEDITED by: S.T. Ahikx\nInsta: @S.T. Ahikx\nI DO NOT OWN THE COVER!",
        chapters: "483",
        views: "2600000",
        rating: "4.76",
        powerStone: "56",
        imageUrl:
          "https://book-pic.webnovel.com/bookcover/23138127806346305?imageMogr2/thumbnail/600&imageId=1692466162726",
        author: {
          _id: 1715298282262,
          name: "editAuthor",
        },
        category: {
          _id: 1715298289877,
          name: "editCategory",
        },
        __v: 0,
      },
      {
        _id: 23900000000000000,
        name: "Unwanted Marriage: Honey, No More Divorce!",
        description:
          'After three years of marriage, Wendy Stewart was used to Michael Lucas\'s sarcastic remarks, his frequent threats about getting divorced, and even his indulgence of a mistress. She thought that she could bear with this her entire life, until she accidentally got pregnant with a child that Michael did not want. Finally despondent, Wendy signed the divorce agreement and left. She thought they could have parted ways forever, but Michael refused to stop looking for her after the divorce.\n\nWhen they met again, she was the world\'s top designer. Smiling sweetly at her ex-husband, she said, "My dear, we\'re already divorced."\n\nMichael simply stared at her coldly, "Tell me, what will it take for us to reconcile?"',
        chapters: "714",
        views: "2100000",
        rating: "3.61",
        powerStone: "45",
        imageUrl:
          "https://book-pic.webnovel.com/bookcover/23943625406803205?imageMogr2/thumbnail/600&imageId=1674652050666",
        author: {
          _id: 6861193136128,
          name: "TheHana",
        },
        category: {
          _id: 6861193152077,
          name: "Urban",
        },
        __v: 0,
      },
      {
        _id: 23901715324199104,
        name: "Novel 2",
        description: "This is a description for Novel 2",
        chapters: "21",
        views: "2000",
        rating: "4.7",
        powerStone: "700",
        imageUrl: "http://example.com/novel2.jpg",
        author: {
          _id: 1715298282262,
          name: "editAuthor",
        },
        category: {
          _id: 1715298289877,
          name: "editCategory",
        },
        createdAt: "2024-05-10T06:56:33.866Z",
        updatedAt: "2024-05-10T15:34:11.294Z",
        __v: 0,
      },
    ],
  };

  useEffect(() => {
    console.log("mkszdmkf");
    navigate(
      "/genres/" +
        pathName +
        "/" +
        selectedGenres
          .replace(/[^a-z0-9\s]/gi, "")
          .split(/\s+/)
          .join("-")
          .toLowerCase()
    );
  }, [navigate, pathName, selectedGenres]);
  return (
    <>
      <div className=" flex flex-row  w-screen max-w-[1080px] max-h-[1620px] h-[1620px]">
        <div className="section-genres flex-flex-col  h-fit">
          <div className="flex flex-col mb-2">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="dropdown-genres text-center inline-flex items-center justify-between mb-2  w-[191px] space-x-6"
              type="button"
              onClick={() => {
                setIsDropdownNovelOpen(!isDropdownNovelOpen);
                setSelectedGenresIndex(0);
                setIsDropdownOpen(false);
              }}
            >
              <p> Genre of Novel</p>
              <svg
                className="w-4 h-4 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {isDropdownNovelOpen && (
              <div
                id="dropdown"
                className="z-10 bg-white truncate flex flex-col flex-wrap max-h-[280px] mb-2"
              >
                {Array.from({ length: 10 }).map((_, index) => (
                  <NavLink
                    to={
                      "/genres/" +
                      pathName +
                      "/" +
                      selectedGenres
                        .replace(/[^a-z0-9\s]/gi, "")
                        .split(/\s+/)
                        .join("-")
                        .toLowerCase()
                    }
                    key={index}
                    className={
                      selectedGenresNovelIndex === index &&
                      pathName === "novels"
                        ? " text-[16px] font-normal text-white rounded-md block truncate max-w-[100px] w-fit  px-2 py-2 mb-1 mr-2 bg-blue-500 hover:cursor-pointer "
                        : " text-[16px] font-normal rounded-md block truncate max-w-[100px] w-fit  px-2 py-2 mb-1 mr-2 hover:bg-blue-500 hover:text-white	hover:cursor-pointer "
                    }
                    onClick={() => {
                      setSelectedGenresNovelIndex(index);
                      setSelectedGenres("Anime & Manga" + index);
                      setPathName("novels");
                    }}
                  >
                    Anime & Manga
                  </NavLink>
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-col ">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="dropdown-genres text-center inline-flex items-center mb-2  w-[191px] space-x-6"
              type="button"
              onClick={() => {
                setIsDropdownOpen(!isDropdownOpen);
                setSelectedGenresNovelIndex(0);
                setIsDropdownNovelOpen(false);
              }}
            >
              <p> Genre of Fan-fic</p>
              <svg
                className="w-4 h-4 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div
                id="dropdown"
                className="z-10 bg-white truncate flex flex-col flex-wrap max-h-[280px] mb-2"
              >
                {Array.from({ length: 10 }).map((_, index) => (
                  <NavLink
                    to={
                      "/genres/" +
                      pathName +
                      "/" +
                      selectedGenres
                        .replace(/[^a-z0-9\s]/gi, "")
                        .split(/\s+/)
                        .join("-")
                        .toLowerCase()
                    }
                    key={index}
                    className={
                      selectedGenresIndex === index && pathName === "fan-fic"
                        ? " text-[16px] font-normal text-white rounded-md block truncate max-w-[100px] w-fit  px-2 py-2 mb-1 mr-2 bg-blue-500 hover:cursor-pointer "
                        : " text-[16px] font-normal rounded-md block truncate max-w-[100px] w-fit  px-2 py-2 mb-1 mr-2 hover:bg-blue-500 hover:text-white	hover:cursor-pointer "
                    }
                    onClick={() => {
                      setSelectedGenresIndex(index);
                      setSelectedGenres("Anime & Manga" + index);
                      setPathName("fan-fic");
                    }}
                  >
                    Anime & Manga
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col w-screen justify-start max-w[890px] h-fit pl-[40px] ">
          <div>
            <div className="text-[20px] font-semibold text-gray-500 pb-2 border-b-[1px] border-gray-200	w-full	">
              Filter By
            </div>

            <div className="flex flex-row justify-between">
              <div className="flex flex-col pb-2">
                <legend className="text-[12px] text-gray-400 font-medium mt-2 mb-1">
                  {" "}
                  Content Status
                </legend>
                <div className="flex flex-row space-x-4">
                  <p
                    className={
                      selectedStatus === 0
                        ? "text-[14px] font-medium px-4 py-1 rounded-xl border-[1px] bg-sky-100 text-blue-500 hover:cursor-pointer"
                        : "text-[14px] font-medium px-4 py-1 rounded-xl border-[1px] border-gray-300 hover:cursor-pointer"
                    }
                    onClick={() => setSelectedStatus(0)}
                  >
                    All
                  </p>
                  <p
                    className={
                      selectedStatus === 1
                        ? "text-[14px] font-medium px-4 py-1 rounded-xl border-[1px] bg-sky-100 text-blue-500 hover:cursor-pointer"
                        : "text-[14px] font-medium px-4 py-1 rounded-xl border-[1px] border-gray-300 hover:cursor-pointer"
                    }
                    onClick={() => setSelectedStatus(1)}
                  >
                    Completed
                  </p>
                  <p
                    className={
                      selectedStatus === 2
                        ? "text-[14px] font-medium px-4 py-1 rounded-xl border-[1px] bg-sky-100 text-blue-500 hover:cursor-pointer"
                        : "text-[14px] font-medium px-4 py-1 rounded-xl border-[1px] border-gray-300 hover:cursor-pointer"
                    }
                    onClick={() => setSelectedStatus(2)}
                  >
                    Ongoing
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-[20px] font-semibold text-gray-500 pb-2 border-b-[1px] border-gray-200	w-full	">
              Sort By
            </div>

            <div className="flex flex-row space-x-4 mt-2">
              <p
                className={
                  selectedSort === 0
                    ? "text-[14px] font-medium px-4 py-1 rounded-xl border-[1px] bg-sky-100 text-blue-500 hover:cursor-pointer"
                    : "text-[14px] font-medium px-4 py-1 rounded-xl border-[1px] border-gray-300 hover:cursor-pointer"
                }
                onClick={() => setSelectedSort(0)}
              >
                Time updated
              </p>
              <p
                className={
                  selectedSort === 1
                    ? "text-[14px] font-medium px-4 py-1 rounded-xl border-[1px] bg-sky-100 text-blue-500 hover:cursor-pointer"
                    : "text-[14px] font-medium px-4 py-1 rounded-xl border-[1px] border-gray-300 hover:cursor-pointer"
                }
                onClick={() => setSelectedSort(1)}
              >
                Chapters
              </p>
              <p
                className={
                  selectedSort === 2
                    ? "text-[14px] font-medium px-4 py-1 rounded-xl border-[1px] bg-sky-100 text-blue-500 hover:cursor-pointer"
                    : "text-[14px] font-medium px-4 py-1 rounded-xl border-[1px] border-gray-300 hover:cursor-pointer"
                }
                onClick={() => setSelectedSort(2)}
              >
                Views
              </p>
              <p
                className={
                  selectedSort === 3
                    ? "text-[14px] font-medium px-4 py-1 rounded-xl border-[1px] bg-sky-100 text-blue-500 hover:cursor-pointer"
                    : "text-[14px] font-medium px-4 py-1 rounded-xl border-[1px] border-gray-300 hover:cursor-pointer"
                }
                onClick={() => setSelectedSort(3)}
              >
                Rating
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 ">
            {dataNovel?.novels.map((eachNovel, index) => {
              console.log("eachNovel", eachNovel);
              return <EachItemNovelGenre key={index} item={eachNovel} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
