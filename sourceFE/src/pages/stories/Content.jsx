import React, { useEffect, useState } from "react";
import { NavLink, useParams, Link } from "react-router-dom";
import "./css/Content.css";
import Tag from "../../components/Tags/Tag";
import Comment from "../../components/Comments/Comment";
import { getNovel, getNovelbyListId } from "../../ultis/utilsNovel";
import { proxyUrl } from "../../api/apiProxy";
import { formatNumber } from "./../../ultis/convertNumber";
import { capitalizeFirstLetter } from "../../ultis/capitalizeFirstLetter ";
import { Loading } from "../../components/UI/Loading";
import { addToLibrary } from "../../ultis/utilsAccount";
import { addHistory } from "../../ultis/ultisHistory";
import { preProcessingCategory } from "../../ultis/preProcessingCategory";
import { toast } from "react-toastify";
import { Banner } from "../../components/banners/Banner";
import useNovel from "../../hooks/useNovel";
import { WeeklyItem } from "../../components/Cards/WeeklyItem";
import { getNovelRecomment } from "../../ultis/utilsRecomment";
import bigInt from "big-integer";
const Content = () => {
  const { idCate } = useParams();
  // const [dataNovel, setDataNovel] = useState(null);
  const [is_Loading, setIsLoading] = useState(true);
  const infor = JSON.parse(localStorage.getItem("Token")) || {};

  const [isAddToLibrary, setIsAddToLibrary] = useState(false);
  const handleAddtoLibrary = () => {
    setIsAddToLibrary(true);
    if (infor?.id) {
      addToLibrary(infor?.id, dataNovel?._id)
        .then(() => {
          setIsAddToLibrary(false);
          toast.success(`Add to library successfully`, {
            autoClose: 1000,
          });
        })
        .catch((error) => {
          setIsAddToLibrary(false);
          toast.error(`Failed to add to library: ${error.message}`, {
            autoClose: 1000,
          });
        });
    } else {
      alert("Please login to add to library");
      window.location.href = "/login";
    }
  };

  const {
    novelData: dataNovel,
    setNovelData: setDataNovel,
    listNovel,
    setListNovel,
    filter,
    setFilter,
    page,
    setPage,
    idNovelRecommender,
    setIdNovelRecommender,
  } = useNovel();

  useEffect(() => {
    getNovelRecomment(idCate).then((res) => {
      const listID = res.data
      // .map((val) => {
      //   const novelIdBigInt = bigInt(val.novel_id);
      //   return novelIdBigInt.toString();
      // });
      console.log("listID in content: ", listID);
      var listid = res?.data?.map((val)=>val.id )
      getNovelbyListId(listid).then((res) => {
        setListNovel((prev) => ({
          ...prev,
          recommenderNovel_Novel: res.data.novels,
        }));
      });
    });
    getNovel(idCate)
      .then((res) => {
        setDataNovel(res);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
    if (infor?.id) {
      const data_History = {
        account: infor.id,
        novel: idCate,
        lastReadChapter: 1,
        lastReadDate: new Date().toISOString().split("T")[0],
      };
      const addtoHistory = async () => {
        await addHistory(data_History);
      };
      addtoHistory();
    }
  }, [idCate]);
  let data = {
    id: "dast43",
    name: "The Imbecile Lord Is Married to Five Beautiful Goddess",
    star: 4.79,
    synopsis:
      "Did I really die?\nCain Lisworth woke up in the adventurer guild, he had returned to the start of his journey after being killed by the cosmos guards.\n Armed with his knowledge, he started his life once again trying to break the heavenly orders and escape the mortal world.\navigatorThis time, without mistakes he will raise back to the top and reclaim his throne as the strongest enchanter in history!\n****\n\nThis story finally has a Discord server. Please visit it to see character art, or demand art to be created for a specific character.\nOnly ask how someone looks, and I will get it out.",
    src: "https://book-pic.webnovel.com/bookcover/23124855606295305?imageMogr2/thumbnail/150&imageId=1698747892444",
  };

  //console.log('idNovel',dataNovel?._id,idCate);
  const [listRecomment, setListReComment] = useState();
  useEffect(() => {
    if (idCate) {
      getNovelRecomment(idCate)
        .then((res) => {
          console.log("data listrecommender in content", res);
          setListReComment(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  // useEffect(() => {
  //   console.log(listRecomment?.length);
  //   if (listRecomment?.length > 0) {
  //     // getNovelbyListId(listRecomment) viet tiep get api
  //   }
  // }, [listRecomment]);
  return is_Loading === false ? (
    <div className="containerCard p-4 w-[1080px] mx-auto bg-slate-50 ">
      <div className="flex h-full flex-initial w-full  rounded-lg">
        <div className=" p-2  image h-[412px] w-[308px] ">
          <img
            className="h-[412px] w-[308px] max-w-[308px] max-h-[412px] object-cover rounded "
            src={proxyUrl(dataNovel?.imageUrl)}
            title={dataNovel?.name}
          />
        </div>
        <div>
          <div className="text  flex-initial w-auto pl-2 mt-5 ">
            <h1 className="font-bold text-[34px]  antialiased	">
              {dataNovel?.name}
            </h1>
            <div className="flex py-2">
              <div className="flex pr-4">
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
                    d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6h.008v.008H6V6Z"
                  />
                </svg>
                <p className="hover:underline	ml-2">
                  <a
                    href={
                      "/genres/novels/" +
                      preProcessingCategory(dataNovel?.category?.name || "NaN")
                    }
                  >
                    <span className="font-bold">
                      {capitalizeFirstLetter(dataNovel?.category?.name)}
                    </span>
                  </a>
                </p>
              </div>
              <div className="flex pr-4">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mr-2 w-[20px] h-[20px] "
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 2h10l6 6v14H4V2zm4 4h4v2H8V6zm8 6v-2H8v2h8z"
                    fill="#000"
                  ></path>
                </svg>
                <p className="	">
                  <span>
                    {dataNovel?.chapters
                      ? dataNovel?.chapters + " Chapters"
                      : "NaN"}{" "}
                  </span>
                </p>
              </div>
              <div className="flex">
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
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>

                <p className="	ml-2">
                  <span>{formatNumber(dataNovel?.views || 0)} Views</span>
                </p>
              </div>
            </div>

            <div className="flex">
              <p className="text-xl font-light">Author:</p>
              <p className="text-xl text-sky-500 ml-2 font-medium hover:underline">
                <NavLink to="/#">{dataNovel?.author?.name}</NavLink>
              </p>
            </div>
            <div className="flex justify-start text-left mt-2">
              <div className="flex">
                {[...Array(5)].map((_i, index) => {
                  const curIndex = index + 1;
                  return (
                    <svg
                      key={index}
                      className={
                        curIndex <= Number(dataNovel?.averageRating.toFixed(1))
                          ? "w-6 h-6 text-[#EAB308] me-1"
                          : "w-6 h-6 text-slare-300 me-1"
                      }
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                      />
                    </svg>
                  );
                })}
              </div>
              <p className="text-xl ml-2">
                {Number(dataNovel?.averageRating.toFixed(1))}
                {"  " + dataNovel?.ratingCount + " ratings"}
              </p>
            </div>

            <div className="icons">
              <i className="fas fa-comments"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-share-alt"></i>
              <i className="fas fa-thumbs-up"></i>
            </div>
          </div>
          <div className="flex px-2 pt-4 pb-6 ">
            <button className="rounded-full bg-cyan-400 hover:bg-blue-700 text-white font-bold py-2 px-4 ">
              <a href={`/stories/${dataNovel?._id}`}>
                <p className=" text-lg">Read</p>
              </a>
            </button>
            <button className="flex justify-center items-center rounded-full ml-5 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 ">
              <div className="mr-1">
                {!isAddToLibrary && (
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
                      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                )}
              </div>
              <p
                className=" text-lg"
                onClick={() => {
                  handleAddtoLibrary();
                }}
              >
                {isAddToLibrary ? "Adding to Library" : "Add to Library"}
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="flex  size-4/5 w-full border-y-4 my-10">
        <div className="text flex-initial w-full my-5 ">
          <h1 className="font-bold text-2xl ">About</h1>
          <p className="text-[16px] font-light text-gray-400">Synopsis </p>
          <p className="italic text-[15px] ml-2 w-full">
            {dataNovel?.description}
          </p>
        </div>
      </div>
      {/* <div className="flex size-4/5 w-full border-b-4 ">
        <div className="text flex-initial w-2/3 mb-5 ">
          <h1 className="font-bold text-2xl ">Tags</h1>
          <div className="mt-2 ">
            <Tag></Tag>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col flex-wrap  pb-12 w-full">
        <div className="flex flex-row justify-between  border-b-2 font-bold  ">
          <h1 className="text-2xl text-black font-bold mb-4 pb-6 ">
            You may also like
          </h1>
        </div>

        <div className="grid grid-cols-8 space-between">
          {listNovel?.recommenderNovel_Novel
            ?.slice(0, 8)
            ?.map((item, index) => (
              <WeeklyItem key={index} items={item} />
            ))}
        </div>
      </div>
      <div className="flex size-4/5 w-full border-b-4 ">
        <div className="text flex-initial  mb-5 w-full ">
          <h1 className="font-bold text-2xl">Rating</h1>
          <div className="mt-8 w-full">
            <Comment idCate={idCate} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-center">
      <Loading />
    </div>
  );
};

export default Content;
