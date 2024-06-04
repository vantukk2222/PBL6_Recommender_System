import React, { useEffect } from "react";
import "./css/libray.css";
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import { capitalizeFirstLetter } from "../../ultis/capitalizeFirstLetter ";
import { proxyUrl } from "../../api/apiProxy";
import { getAccount } from "../../ultis/utilsAccount";
import useLibrary from "./../../hooks/useLibrary";
import useAccount from "../../hooks/useAccount";
import { Loading } from "../../components/UI/Loading";
import { EachItemInLibraries } from "./EachItemInLibraries";
import {
  deleteHistoriesByIDAccount,
  getHistory,
} from "../../ultis/ultisHistory";
import useHistory from "../../hooks/useHistories";
import { EachItemHistories } from "./ItemHistories";
import { toast } from "react-toastify";
export const Library = () => {
  const dataEachHistoryTemplate = {
    _id: "017172645716924557",
    account: "017172302625194566",
    novel: {
      _id: "23772970705037005",
      name: "Jack Hanma: True might [reworked 2]",
      description:
        "Jack Hanma is one of if not the most disrespected character of the baki series despite him being one of the strongest in it.\nbut what if that changed what if him being an unpure hanma had a different meaning then what you would expect.\n\nNote: this my first time writing and English isn't my native language so the first two chapters are a bit rough but it gets better from chapter 3 and onwards.\n\nThe cover image isn't mine.\n\nnote: under the recent changes I decided That I well be posting this story on RoyalRoad.com and Fanfiction.net under the same name for both the story and the account.",
      chapters: 117,
      views: 2,
      powerStone: 766,
      imageUrl:
        "https://book-pic.webnovel.com/bookcover/23772970705037005?imageMogr2/thumbnail/600&imageId=1664311544617",
      author: "017172302840748368",
      category: "017172293720079532",
      totalRating: 6,
      ratingCount: 2,
      averageRating: 3,
      createdAt: "2024-06-01T10:47:31.578Z",
      updatedAt: "2024-06-02T03:53:08.376Z",
      __v: 0,
    },
    lastReadChapter: 1,
    lastReadDate: "2024-06-01T00:00:00.000Z",
    createdAt: "2024-06-01T17:56:11.692Z",
    updatedAt: "2024-06-01T17:56:11.692Z",
    __v: 0,
  };
  const library = useLocation().pathname.split("/")[1];
  const [editClick, setEditClick] = useState(false);
  const [hoveredLink, setHoveredLink] = useState("");
  const Token = JSON.parse(localStorage.getItem("Token")) || {};
  // Kiểm tra xem liên kết nào nên được underline
  const shouldUnderline = (link) => {
    if (hoveredLink) {
      return hoveredLink === link;
    }
    return library === link;
  };
  const { libraryData, setLibraryData, filter, setFilter, page, setPage } =
    useLibrary();
  const {
    historyData,
    setHistoryData,
    filter: filterHistory,
    setFilter: setFilterHistory,
    page: historyPage,
    setPage: setHistoryPage,
  } = useHistory();

  const [is_Loading, setLoading] = useState(true);
  useEffect(() => {
    if (!Token?.id) {
      toast.error("Please login to use this feature");
      window.location.href = "/login";
    }
    if (library === "library" && Token?.id) {
      getAccount(Token.id).then((res) => {
        setLibraryData(res.likedNovels);
        setLoading(false);
      });
    }
    if (library === "history" && Token?.id) {
      getHistory(Token?.id).then((res) => {
        setHistoryData(res.histories);

        setHistoryPage({
          currentPage: res.page.currentPage,
          totalPages: res.page.totalPages,
        });
        setLoading(false);
      });
    }
  }, []);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const openAlert = () => {
    setIsAlertOpen(true);
  };

  const closeAlert = () => {
    setIsAlertOpen(false);
  };

  const handleYes = () => {
    try {
      const deletedAllHistory = async () => {
        await deleteHistoriesByIDAccount(Token?.id).then((res) => {
          if (res.status === 200) {
            setHistoryData([]);
            toast.success("All histories deleted for account");
          } else {
            toast.error(
              "Failed to delete histories: " + res.message || "Unknown error"
            );
          }
        });
      };
      deletedAllHistory();
      closeAlert();
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while delete your histories");
    }
  };

  const handleNo = () => {
    closeAlert();
  };
  const handleDeleteAllHistory = () => {
    historyData?.length > 0 && openAlert();
  };
  return !is_Loading ? (
    <>
      <div className="flex flex-col items-center justify-center maw-w-[1080px] w-[1080px] h-fit">
        <div className="flex flex-col w-full items-left justify-center h-[140px] border-b-2 border-gray-300	">
          <h2
            className="leading-10 text-[38px] font-bold"
            onClick={() => {
              console.log("histories data: ", historyData);
            }}
          >
            {capitalizeFirstLetter(library || "library")}
          </h2>
          <div className="flex flex-row items-end justify-between text-[22px]  h-3/6	">
            <p className="space-x-6">
              <a
                href="/library"
                className={
                  "nav-link " + (library == "library" ? " font-bold" : "")
                }
                style={
                  shouldUnderline("library")
                    ? {
                        textDecoration: "underline",
                        textDecorationColor: "blue",
                        transition: "right 0.3s ease-out",
                      }
                    : { textDecoration: "none" }
                }
                onMouseEnter={() => setHoveredLink("library")}
                onMouseLeave={() => setHoveredLink("")}
              >
                Library
              </a>
              <a
                href="/history"
                className={
                  "nav-link " + (library == "history" ? " font-bold" : "")
                }
                style={
                  shouldUnderline("history")
                    ? {
                        textDecoration: "underline",
                        textDecorationColor: "blue",
                        transition: "right 0.3s ease-out",
                      }
                    : { textDecoration: "none" }
                }
                onMouseEnter={() => setHoveredLink("history")}
                onMouseLeave={() => setHoveredLink("")}
              >
                History
              </a>
            </p>
            {library == "library" ? (
              <p className="flex flex-row items-center justify-center  text-[18px] text-blue-500 gap-2">
                {!editClick && (
                  <a className=" flex flex-row mr-2 hover:cursor-pointer hover:scale-105 transition duration-300 ease-in-out hover:cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      id="_24x24_On_Light_Edit"
                      data-name="24x24/On Light/Edit"
                      className="mt-1   hover:underline"
                    >
                      <rect id="view-box" width="20" height="20" fill="none" />
                      <path
                        id="Shape"
                        d="M.75,17.5A.751.751,0,0,1,0,16.75V12.569a.755.755,0,0,1,.22-.53L11.461.8a2.72,2.72,0,0,1,3.848,0L16.7,2.191a2.72,2.72,0,0,1,0,3.848L5.462,17.28a.747.747,0,0,1-.531.22ZM1.5,12.879V16h3.12l7.91-7.91L9.41,4.97ZM13.591,7.03l2.051-2.051a1.223,1.223,0,0,0,0-1.727L14.249,1.858a1.222,1.222,0,0,0-1.727,0L10.47,3.91Z"
                        transform="translate(3.25 3.25)"
                        fill="blue"
                      />
                    </svg>
                    <span
                      onClick={() => {
                        setEditClick(true);
                      }}
                    >
                      Edit
                    </span>
                  </a>
                )}
                {editClick && (
                  <a className=" flex flex-row mr-2 hover:cursor-pointer">
                    <a
                      title="Remove"
                      href="###"
                      className="text-red-400 mr-4  hover:underline"
                    >
                      <span>Remove</span>
                    </a>
                    <a
                      title="Cancel"
                      href="###"
                      className="text-blue-500 mr-4  hover:underline"
                    >
                      <span
                        onClick={() => {
                          setEditClick(false);
                        }}
                      >
                        Cancel
                      </span>
                    </a>
                  </a>
                )}
                <a className=" flex flex-row mr-2 hover:cursor-pointer ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mt-1"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7ZM6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12ZM9 17C9 16.4477 9.44772 16 10 16H14C14.5523 16 15 16.4477 15 17C15 17.5523 14.5523 18 14 18H10C9.44772 18 9 17.5523 9 17Z"
                      fill="blue"
                    />
                  </svg>
                  <span>Recently read</span>
                </a>
              </p>
            ) : (
              <p
                className="flex flex-row items-center justify-center text-[18px] text-blue-500 gap-2 hover:cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
                onClick={handleDeleteAllHistory}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17"
                    stroke="#3B82F5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <a>Remove all history</a>
              </p>
            )}
          </div>
        </div>
        {isAlertOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-400 bg-opacity-25 z-50">
            <div className="bg-white p-6 rounded shadow-lg text-center z-60">
              <p className="mb-4 text-lg">Do you want to remove all history?</p>
              <div>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-600"
                  onClick={handleYes}
                >
                  Remove
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={handleNo}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="flex-row w-full">
          {libraryData?.length == 0 && (
            <p className=" flex flex-col text-[16px] text-gray-400 items-center justify-center space-x-2 p-4">
              <img
                src={proxyUrl(
                  "https://www.yueimg.com/en/images/wait2x.79d246d4.png"
                )}
              ></img>
              <span className="">You haven't added any books yet.</span>
              <a className="text-blue-500 font-semibold" href="/">
                EXPLORE
              </a>
            </p>
          )}
          {library === "library" && libraryData?.length > 0 && (
            <>
              <div className="grid grid-cols-7 mt-4">
                {libraryData?.map((eachLibraryItem, idx) => {
                  return (
                    <EachItemInLibraries
                      key={idx}
                      id_novel={eachLibraryItem || dataEachHistoryTemplate}
                    />
                  );
                })}
              </div>
            </>
          )}
          {library === "history" && historyData?.length > 0 && (
            <div className="grid grid-cols-1 mt-4">
              {historyData?.map((eachHistoryItem, idx) => {
                return <EachItemHistories key={idx} item={eachHistoryItem} />;
              })}
            </div>
          )}
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="flex justify-center">
        <Loading />
      </div>
    </>
  );
};
