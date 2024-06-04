import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { deleteAccount, getAccounts, updateAccount } from "../../ultis/utilsAccount";
import useAccount from "../../hooks/useAccount";
import { list } from "postcss";
import { Loading } from "../../components/UI/Loading";
import { formatDate } from "../../ultis/convertTime";
import {
  AddUserIcon,
  DeleteIcon,
  EditIcon,
  LeftIcon,
  ResetIcon,
  RightIcon,
  SearchIcon,
} from "../../components/headers/icon.jsx";
import Modal from "react-modal";
import AdBanner from "../../components/admin/AdBanner";
import { toast } from "react-toastify";
Modal.setAppElement('#root');
const AdminDashboard = () => {
  const { listAccount, setListAccount, page, setPage, filter, setFilter } =
    useAccount();
  // const handleFilter = (list) =>{
  //   return list.filter((value)=>(value?.role?.name !== 'admin' ));

  // }
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true)
    getAccounts(filter)
      .then((res) => {
        console.log("call api", res);
        // const listAcc  = handleFilter(res.accounts)
        // console.log('list',listAcc);
       // setListAccount(res.accounts);
        const list = res.accounts
        if (list.length > 0) {
          setListAccount(list);
        } else {
          toast.error(`Can't find this account!`, {
            autoClose: 1000,
          });
        }
        setIsLoading(false);
        setPage({
          totalPages: res.page.totalPages,
          currentPage: res.page.currentPage
        })
      })
      .catch((err) => {
        alert(
          "An error occurred while fetching accounts. Please try again later."
        );
        setIsLoading(false);
      });
  }, [filter]);


  const searchInputRef = useRef(null);
  const [isShowModal, setIsShowModal] = useState(false);
  const [userSelect, setUserSelect] = useState({});
  function openModal(userInfor) {
    console.log(userInfor);
    setUserSelect(userInfor);
    setIsShowModal(true);
  }
  function closeModal() {
    setIsShowModal(false);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserSelect((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitEditUser = (e) => {
    e.preventDefault();
    const acc = {
      id: userSelect._id,
      name: userSelect.name,
    };
    updateAccount(acc)
      .then((res) => {
        // console.log(res.data);
        if (res.status == 200) {
          setListAccount((prev) =>
            prev.map((account) => (account._id === res.data._id ? res.data : account))
          );
          toast.success(`Update account successful!`, {
            autoClose: 1000,
          });
        }
        closeModal()
      })
      .catch((err) => {
        toast.error(`Couldn't updated account!`, {
          autoClose: 1000,
        });
        console.log('update acc err', err);
        closeModal()
        setUserSelect({});
      });
  };
  const handleDeleteAcc = (acc) => {
    const userConfirmed = window.confirm("Are you sure you want to delete this account?");

    // If the user confirmed, proceed with the deletion
    if (userConfirmed) {
      deleteAccount(acc._id).then((res) => {
        if (res.status === 200 || res.status === 202) {
          setListAccount((prev) => prev.filter((account) => account._id !== acc._id));
        }
        toast.success(`Deleted account successful!`, {
          autoClose: 1000,
        });
      }).catch((err) => {
        toast.error(`Couldn't remove account!`, {
          autoClose: 1000,
        });
        console.log('remove acc err: ', err);
      });
    }
  }
  const handlePageChange = (newPage) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      page: newPage,
    }));
  };
  const [searchText, setSearchText] = useState("")
  const handleSearch = () => {
    console.log('searchText: ', searchText);
    setFilter((prev) => ({
      ...prev,
      search: searchText
    }))
  };
  console.log("userselect", userSelect);
  const customStyles = {
    content: {
      top: "55%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  // console.log(listAccount);
  return !isLoading ? (
    <div className=" flex flex-col justify-start items-center mx-auto bg-slate-200 rounded-xl w-screen  max-w-[1080px]  ">
      <div>
        <AdBanner name={""} />
      </div>
      <div className="w-[1020px] mt-2 h-[60px] flex items-center justify-between  bg-slate-500 dark:bg-gray-700 p-4 rounded-t-lg shadow">
        <div className="flex-none w-[20px] h-[20px]"></div>
        <div className="shrink w-[300px] h-[40px]">
          <div className="flex bg-gray-200 relative rounded-lg px-4 py-2">
            <button className="mx-2 hover:text-blue-500" onClick={handleSearch} >
              <SearchIcon classname="text-gray-500 " />
            </button>
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              className="bg-transparent border-none outline-none"
            />
            <button className="mx-4 absolute inset-y-0 right-0 hover:text-green-400 "
              onClick={() => {
                setSearchText('')
                setFilter((prev) => ({
                  ...prev,
                  search: ''
                }))
              }}>
              <ResetIcon classname="text-gray-500 " />
            </button>
            {/* <i className="fas fa-search text-gray-500"></i> */}
          </div>
        </div>
        <div className="flex-none w-[148px] h-[40px] ">
          <Link to={"/addAccount"} className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600">
            {/* <i className="fas fa-plus-circle mr-2"></i> */}
            <div className="mx-1">
              <AddUserIcon />
            </div>
            Add Account
          </Link>
        </div>
      </div>
      <div className="bg-while-300 w-[1020px] min-h-screen ">
        <div className="relative overflow-x-auto shadow-md sm:rounded-b-lg ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
            <thead className="h-[50px] text-xs text-gray-700 uppercase bg-slate-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Username
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Create at
                </th>
                <th scope="col" className="px-6 py-3">
                  Update at
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {listAccount && listAccount?.map((account, index) => (
                <tr
                  key={account._id}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {account?.username}<p className="text-blue-600 text-xs">{account?.role?.name}</p>
                  </th>
                  <td className="px-6 py-4">{account?.email}</td>
                  <td className="px-6 py-4">{account?.name}</td>
                  <td className="px-6 py-4">
                    {formatDate(account?.createdAt)}
                  </td>
                  <td className="px-6 py-4">
                    {formatDate(account?.updatedAt)}
                  </td>
                  <td className="px-6 py-4 flex flex-row justify-center item-center">
                    {account?.role?.name === 'admin' ? (
                      <div>

                      </div>) : (
                      <>
                        <div
                          onClick={() => {
                            openModal(account);
                          }}
                          className="mt-2 font-medium text-blue-300 dark:text-blue-500 hover:text-blue-700 "
                        >
                          <EditIcon></EditIcon>
                        </div>
                        <button
                          onClick={() => {
                            handleDeleteAcc(account)
                          }}
                          className="mx-2 mt-2 font-medium text-red-300 dark:text-red-500 hover:text-red-700"
                        >
                          <DeleteIcon></DeleteIcon>
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="6" className="px-6 py-3">
                  <div className="flex justify-end  items-center">
                    <button
                      disabled={page?.currentPage === 1}
                      onClick={() => handlePageChange(page?.currentPage - 1)}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50  mx-2"
                    >
                      <LeftIcon />
                    </button>
                    <span>
                      Page {page?.currentPage} of {page?.totalPages}
                    </span>
                    <button
                      disabled={page?.currentPage === page?.totalPages}
                      onClick={() => handlePageChange(page?.currentPage + 1)}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50  mx-2"
                    >
                      <RightIcon />
                    </button>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div>
        <Modal
          isOpen={isShowModal}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="w-[400px] flex items-center justify-center">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
              <button onClick={closeModal}>close</button>
              <h2 className="text-2xl font-bold text-center text-purple-700">
                Update account
              </h2>
              <form className="space-y-4" onSubmit={handleSubmitEditUser}>
                <div className="flex flex-row">
                  <label htmlFor="username" className="px-4 py-2 w-1/3">
                    Username{" "}
                  </label>
                  <p className="w-[70%] px-4 py-2 border rounded-md border-red-500 focus:outline-none focus:ring-2 focus:ring-purple-500">
                    {userSelect?.username}
                  </p>
                </div>
                <div className="flex flex-row">
                  <label htmlFor="name" className="px-4 py-2 w-1/3">
                    Name{" "}
                  </label>

                  <input
                    type="tel"
                    id="name"
                    name="name"
                    onChange={handleInputChange}
                    placeholder="Name"
                    value={userSelect?.name || ""}
                    className="w-full  px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full py-2 text-white bg-purple-500 rounded-md hover:bg-purple-600"
                  >
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  ) : (
    <div className="flex justify-center">
      <Loading />
    </div>
  );
};

export default AdminDashboard;
