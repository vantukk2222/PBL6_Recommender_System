import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { proxyUrl } from "./../../api/apiProxy";
import { CommentInProfile } from "./CommentInProfile";
import { getAccount } from "../../ultis/utilsAccount";
import useAccount from "./../../hooks/useAccount";
import { getComments } from "../../ultis/utilsComment";
import useComment from "../../hooks/useComment";
import { PaginationNav1Presentation } from "../../components/pagination/PaginationNovel";
import PageNovel from "./../admin/Novel/PageNovel";
import { EditProfile } from "./EditProfile";

export const Profile = () => {
  const { Id } = useParams();
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
  const { page: pageComment, setPage: setPageComment } = useComment();
  const [editProfile, setEditProfile] = useState(false);
  const [listComment, setListComment] = useState();
  const [isLoadingComment, setIsLoadingComment] = useState(false);
  const newFilter = useMemo(
    () => ({
      page: pageComment?.currentPage || 1,
      pageSize: 10,
      sortField: "updatedAt",
      sortOrder: "desc",
      accountId: Id,
    }),
    [Id, pageComment?.currentPage]
  );

  // Memoize the getComments function
  const fetchComments = useCallback(() => {
    setIsLoadingComment(true);
    getComments(newFilter).then((res) => {
      setListComment(res.comments);
      setPageComment({
        totalPages: res.page.totalPages,
        currentPage: res.page.currentPage,
      });
      setIsLoadingComment(false);
    });
  }, [newFilter]);

  // Memoize the getAccount function
  const fetchAccount = useCallback(() => {
    getAccount(Id).then((data) => {
      setDataProfile(data);
    });
  }, [Id]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);
  useEffect(() => {
    fetchAccount();
  }, [fetchAccount]);

  // useEffect(() => {
  //   setIsLoadingComment(true);
  //   const newFilter = {
  //     page: 1,
  //     pageSize: 1000,
  //     sortField: "updatedAt",
  //     sortOrder: "desc",
  //     accountId: Id,
  //   };

  //   getComments(newFilter).then((res) => {
  //     setListComment(res.comments);
  //     setIsLoadingComment(false);
  //   });

  //   getAccount(Id).then((data) => {
  //     setDataProfile(data);
  //     console.log("data: ", data);
  //   });
  // }, [Id]);
  return (
    <>
      <div className=" flex flex-col items-center mx-auto w-full max-h-[1620px] h-[1080px]">
        {editProfile && (
          <EditProfile data={dataProfile} setModal={setEditProfile} />
        )}
        <div className="items-center h-fit bg-slate-100 w-[1080px] transform duration-200 easy-in-out">
          <div className="relative flex flex-col h-[382px]  bg-red-100 ">
            <div className="relative h-[382px] w-full">
              <img
                className="object-cover h-full w-full"
                src={proxyUrl(
                  "https://www.yueimg.com/en/images/reader.ced74ddd.svg"
                )}
                alt=""
              />
              <ul className="absolute bottom-0 left-0 w-full h-full items-end text-center text-sm flex text-black bg-opacity-30 bg-gray-500">
                <li className="inline-block flex-1 relative pl-8 pr-8 text-gray-200">
                  <span className="block mb-1 truncate">
                    <strong className="text-2xl font-semibold ">-h</strong>
                  </span>
                  <span className="text-xs">
                    <span className="align-middle text-sm">of Reading </span>
                  </span>
                </li>
                <li className="inline-block flex-1 relative pl-8 pr-8 text-white">
                  <span className="block mb-1 truncate">
                    <strong className="text-3xl font-semibold ">
                      {dataProfile?.likedNovels?.length || "NaN"}
                    </strong>
                  </span>
                  <span className="text-xs">
                    <span className="align-middle text-sm text-gray-200">
                      Favorite books
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className=" relative flex justify-left px-5 mb-4 -mt-20  h-fit w-fit">
            <img
              className="h-48 w-48 bg-white p-2 rounded-full   "
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              alt=""
            />
          </div>
          <div className="flex flex-row w-fit ml-2">
            <h3 className="fs-32 fw-600 text-3xl  mr-4 font-bold">
              {dataProfile?.username || "Username"}
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32px"
              height="32px"
              viewBox="0 0 24 24"
              className="mb-2   hover:underline hover:cursor-pointer"
              onClick={() => {
                setEditProfile(true);
              }}
            >
              <title>Edit Profile</title>

              <rect id="view-box" width="20" height="20" fill="none" />
              <path
                id="Shape"
                d="M.75,17.5A.751.751,0,0,1,0,16.75V12.569a.755.755,0,0,1,.22-.53L11.461.8a2.72,2.72,0,0,1,3.848,0L16.7,2.191a2.72,2.72,0,0,1,0,3.848L5.462,17.28a.747.747,0,0,1-.531.22ZM1.5,12.879V16h3.12l7.91-7.91L9.41,4.97ZM13.591,7.03l2.051-2.051a1.223,1.223,0,0,0,0-1.727L14.249,1.858a1.222,1.222,0,0,0-1.727,0L10.47,3.91Z"
                transform="translate(3.25 3.25)"
                fill="blue"
              />
            </svg>
          </div>
          <div className="flex flex-col w-fit gap-2 ml-2">
            <h3 className="fs-32 fw-600 text-lg  mr-4 font-bold text-gray-400">
              {"ID: " + dataProfile?._id || "000000"}
            </h3>
            <address className="flex flex-row  items-center text-base 	">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                version="1.1"
                id="Capa_1"
                width="24px"
                height="24px"
                viewBox="0 0 610.398 610.398"
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path d="M159.567,0h-15.329c-1.956,0-3.811,0.411-5.608,0.995c-8.979,2.912-15.616,12.498-15.616,23.997v10.552v27.009v14.052    c0,2.611,0.435,5.078,1.066,7.44c2.702,10.146,10.653,17.552,20.158,17.552h15.329c11.724,0,21.224-11.188,21.224-24.992V62.553    V35.544V24.992C180.791,11.188,171.291,0,159.567,0z" />
                    <path d="M461.288,0h-15.329c-11.724,0-21.224,11.188-21.224,24.992v10.552v27.009v14.052c0,13.804,9.5,24.992,21.224,24.992    h15.329c11.724,0,21.224-11.188,21.224-24.992V62.553V35.544V24.992C482.507,11.188,473.007,0,461.288,0z" />
                    <path d="M539.586,62.553h-37.954v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.247,0-40.349-19.79-40.349-44.117    V62.553H199.916v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.248,0-40.349-19.79-40.349-44.117V62.553H70.818    c-21.066,0-38.15,16.017-38.15,35.764v476.318c0,19.784,17.083,35.764,38.15,35.764h468.763c21.085,0,38.149-15.984,38.149-35.764    V98.322C577.735,78.575,560.671,62.553,539.586,62.553z M527.757,557.9l-446.502-0.172V173.717h446.502V557.9z" />
                    <path d="M353.017,266.258h117.428c10.193,0,18.437-10.179,18.437-22.759s-8.248-22.759-18.437-22.759H353.017    c-10.193,0-18.437,10.179-18.437,22.759C334.58,256.074,342.823,266.258,353.017,266.258z" />
                    <path d="M353.017,348.467h117.428c10.193,0,18.437-10.179,18.437-22.759c0-12.579-8.248-22.758-18.437-22.758H353.017    c-10.193,0-18.437,10.179-18.437,22.758C334.58,338.288,342.823,348.467,353.017,348.467z" />
                    <path d="M353.017,430.676h117.428c10.193,0,18.437-10.18,18.437-22.759s-8.248-22.759-18.437-22.759H353.017    c-10.193,0-18.437,10.18-18.437,22.759S342.823,430.676,353.017,430.676z" />
                    <path d="M353.017,512.89h117.428c10.193,0,18.437-10.18,18.437-22.759c0-12.58-8.248-22.759-18.437-22.759H353.017    c-10.193,0-18.437,10.179-18.437,22.759C334.58,502.71,342.823,512.89,353.017,512.89z" />
                    <path d="M145.032,266.258H262.46c10.193,0,18.436-10.179,18.436-22.759s-8.248-22.759-18.436-22.759H145.032    c-10.194,0-18.437,10.179-18.437,22.759C126.596,256.074,134.838,266.258,145.032,266.258z" />
                    <path d="M145.032,348.467H262.46c10.193,0,18.436-10.179,18.436-22.759c0-12.579-8.248-22.758-18.436-22.758H145.032    c-10.194,0-18.437,10.179-18.437,22.758C126.596,338.288,134.838,348.467,145.032,348.467z" />
                    <path d="M145.032,430.676H262.46c10.193,0,18.436-10.18,18.436-22.759s-8.248-22.759-18.436-22.759H145.032    c-10.194,0-18.437,10.18-18.437,22.759S134.838,430.676,145.032,430.676z" />
                    <path d="M145.032,512.89H262.46c10.193,0,18.436-10.18,18.436-22.759c0-12.58-8.248-22.759-18.436-22.759H145.032    c-10.194,0-18.437,10.179-18.437,22.759C126.596,502.71,134.838,512.89,145.032,512.89z" />
                  </g>
                </g>
              </svg>
              <strong className="ml-2 font-medium	">
                {dataProfile?.createdAt?.split("T")[0] + " Joined" ||
                  "01/01/1970" + " Joined"}
              </strong>
              <svg width="24" height="24" className="mr8">
                <use xlinkHref="#IPinMap"></use>
              </svg>
            </address>
          </div>
        </div>
        <div className=" items-left w-[1080px] h-fit transform duration-200 easy-in-out text-[30px] font-bold mt-8">
          <h3
            className="flex h-fit w-fit items-start mb-4 "
            onClick={() => {
              console.log("listComment: ", listComment);
            }}
          >
            Moments
            {!isLoadingComment && (
              <small className=" text-[21px]  text-center text-gray-400 h-full ">
                {pageComment?.totalPages * 10 || "0"}
              </small>
            )}
          </h3>
          {isLoadingComment && (
            <div className="flex space-x-2 justify-center items-center bg-white h-fit mt-8">
              <span className="sr-only">Loading...</span>
              <div className="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="h-2 w-2 bg-black rounded-full animate-bounce"></div>
            </div>
          )}
          {!isLoadingComment &&
            listComment?.map((item, index) => (
              <CommentInProfile key={index} data_comment={item} />
            ))}
        </div>
        <div className="flex space-x-2 justify-center items-center bg-white h-fit mt-8">
          <PaginationNav1Presentation
            pageIndex={pageComment?.currentPage}
            setPageIndex={setPageComment}
            pageCount={pageComment?.totalPages}
          />
        </div>
      </div>
    </>
  );
};
