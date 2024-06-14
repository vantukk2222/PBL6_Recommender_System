import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { proxyUrl } from "../../api/apiProxy";
import useAccount from "../../hooks/useAccount";
import { DaysSinceDate } from "../../ultis/calcDateTime";
import { getNovel } from "../../ultis/utilsNovel";
import ImageWithPlaceholder from "../../components/UI/ImagePlaceHolder";

export const CommentInProfile = ({ data_comment }) => {
  const {
    accountData: dataProfile,
    setAccountData: setDataProfile,
    listAccount,
    setListAccount,
    filter,
    setFilter,
    page,
    setPage,
  } = useAccount();

  const [dataNovel, setDataNovel] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getNovel(data_comment?.novel?._id).then((res) => {
      setDataNovel(res);
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      <div className="flex flex-row  h-fit w-full">
        <ImageWithPlaceholder
          classname="w-[40px] h-[40px]  ease-in-out delay-100 hover:-translate-y-1 hover:scale-105  duration-500"
          source={
            "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
          }
          title_img={"avatar"}
        />
        {/* <img
          id="headerAvatar"
          width="40"
          height="40"
          className="rounded-full overflow-hidden transition-all duration-300 w-10 h-10"
          src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
          alt="DaoistpNlawl"
        /> */}
        <div className="w-full h-fit">
          <div className="flex justify-between text-[18px] h-full">
            <span>{dataProfile?.username || "Username"}</span>
            <span
              className="pt-4"
              onClick={() => {
                console.log("data_comment: ", data_comment);
              }}
            >
              {DaysSinceDate(data_comment?.createdAt || new Date()) >=1 ? DaysSinceDate(data_comment?.createdAt || new Date()) +"d" : "Recently"}
            </span>
          </div>
          <small className="flex flex-row items-center text-[14px] text-slate-400 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              fill="gray"
              className="mr-2"
            >
              <path
                d="M21.0039 12C21.0039 16.9706 16.9745 21 12.0039 21C9.9675 21 3.00463 21 3.00463 21C3.00463 21 4.56382 17.2561 3.93982 16.0008C3.34076 14.7956 3.00391 13.4372 3.00391 12C3.00391 7.02944 7.03334 3 12.0039 3C16.9745 3 21.0039 7.02944 21.0039 12Z"
                stroke="gray"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="mr-2">Posted</span>
            {Array.from({ length: 5 }).map((_, index) => (
              <svg
                key={index}
                className={
                  "w-4 h-4" +
                  (index < data_comment?.rating
                    ? "text-yellow-500"
                    : "text-gray-300")
                }
                aria-hidden="false"
                xmlns="http://www.w3.org/2000/svg"
                fill="#FF8D29"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
          </small>
          <p className="text-[16px] text-gray-400 mt-1 hover:bg-blue-100 hover:cursor-pointer">
            {data_comment?.content || "Content"}
          </p>
          <a
            className="flex items-center p-2 bg-gray-100 rounded-md h-full hover:bg-blue-100 hover:cursor-pointer"
            href={"/content/" + dataNovel?._id}
          >
            <ImageWithPlaceholder
              classname="transition-all duration-300 w-14 h-18 mr-4  ease-in-out delay-100 hover:-translate-y-1 hover:scale-105  duration-500"
              source={proxyUrl(dataNovel?.imageUrl)}
              title_img={dataProfile?.username || "Username"}
            />

            <div className="flex flex-col text-[16px] h-14  flex-1 ">
              <h3 className="font-semibold">{dataNovel?.name}</h3>
              <p className="text-gray-500 text-sm">
                {dataNovel?.category?.name}
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

CommentInProfile.propTypes = {
  data_comment: PropTypes.object,
};
