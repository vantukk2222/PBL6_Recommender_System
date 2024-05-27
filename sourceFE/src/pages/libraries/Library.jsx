import React, { useEffect } from "react";
import "./css/libray.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { capitalizeFirstLetter } from "../../ultis/capitalizeFirstLetter ";
export const Library = () => {
  const { library } = useParams();
  const [editClick, setEditClick] = useState(false);
  const [hoveredLink, setHoveredLink] = useState("");

  // Kiểm tra xem liên kết nào nên được underline
  const shouldUnderline = (link) => {
    if (hoveredLink) {
      return hoveredLink === link;
    }
    return library === link;
  };
  useEffect(() => {}, [library]);
  return (
    <>
      <div className="flex item-center mx-auto  maw-w-[1080px] w-[1080px] h-screen">
        <div className="flex flex-col w-full items-left justify-center h-[140px] ">
          <h2 className="leading-10 text-[38px] font-bold">
            {capitalizeFirstLetter(library)}
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
            <p className="flex flex-row items-center justify-center  text-[20px] text-blue-500">
              <a className=" flex flex-row mr-2 hover:cursor-pointer">
                {!editClick && (
                  <>
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
                      className="  hover:underline"
                      onClick={() => {
                        setEditClick(true);
                      }}
                    >
                      Edit
                    </span>
                  </>
                )}
                {editClick && (
                  <>
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
                  </>
                )}
              </a>
              <a className=" flex flex-row mr-2 hover:cursor-pointer">
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
          </div>
        </div>
      </div>
    </>
  );
};
