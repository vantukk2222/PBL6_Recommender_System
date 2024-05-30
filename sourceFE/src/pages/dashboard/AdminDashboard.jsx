import React, { useEffect, useState } from 'react'
import { getAccounts } from '../../ultis/utilsAccount'
import useAccount from '../../hooks/useAccount'
import { list } from 'postcss';
import { Loading } from '../../components/UI/Loading';
import { formatDate } from '../../ultis/convertTime';
import { AddUserIcon, DeleteIcon, EditIcon, LeftIcon, RightIcon, SearchIcon } from '../../components/headers/icon.jsx'
const AdminDashboard = () => {

  const { listAccount,
    setListAccount,
    page,
    setPage,
    filter,
    setFilter, } = useAccount();

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getAccounts(filter).then((res) => {
      console.log("call api", res);
      setListAccount(res.accounts)
      setIsLoading(false)
    }).catch((err) => {
      alert("An error occurred while fetching accounts. Please try again later.")
      setIsLoading(false)
    })

  }, [])
  // console.log(listAccount);
  return !isLoading ? (
    <div className=" flex flex-col justify-start items-center mx-auto bg-slate-200  w-screen  max-w-[1080px] ">
      <div className="w-[1020px] h-[80px] flex items-center justify-between bg-gray-100 p-4 rounded shadow">
        <div class="flex-none w-14 h-14 ...">
          
        </div>
        <div class="shrink w-[300px] h-[40px]">
          <div className="flex bg-gray-200 rounded-lg px-4 py-2">
            <div className='mx-2'>
              <SearchIcon classname="text-gray-500 hover:bg-gray-400"/>
            </div>
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-none outline-none"
            />

            {/* <i className="fas fa-search text-gray-500"></i> */}
          </div>
        </div>
        <div class="flex-none w-[148px] h-[40px] ">
          <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600">
            {/* <i className="fas fa-plus-circle mr-2"></i> */}
            <div className='mx-1'>
            <AddUserIcon/>
            </div>
            Add Customer
          </button>
        </div>

      </div>
      <div className="bg-while-300 w-[1020px] ">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-slate-400 dark:bg-gray-700 dark:text-gray-400">
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

              {listAccount.map((account, index) => (
                <tr key={account._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{account?.username}</th>
                  <td className="px-6 py-4">{account?.email}</td>
                  <td className="px-6 py-4">{account?.name}</td>
                  <td className="px-6 py-4">{formatDate
                    (account?.createdAt)}</td>
                  <td className="px-6 py-4">{formatDate
                    (account?.updatedAt)}</td>
                  <td className="px-6 py-4 flex flex-row justify-center item-center">
                    <a href="#" className="mt-4 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      <EditIcon></EditIcon>
                    </a>
                    <a href="#" className="mx-2 mt-4 font-medium text-red-600 dark:text-red-500 hover:underline">
                      <DeleteIcon></DeleteIcon>
                    </a>
                  </td>
                </tr>
              ))}

            </tbody>
            <tfoot>
              <tr>
                <td colSpan="6" className="px-6 py-3">
                  <div className="flex   items-center">
                    <button
                     
                      // disabled={currentPage === 1}
                      // onClick={() => handlePageChange(currentPage - 1)}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50 hover:bg-green-300 "
                    >
                     <LeftIcon />
                    </button>
                    <span>
                      {/* Page {currentPage} of {totalPages} */}
                      Page 1 of 10
                    </span>
                    <button
                     // disabled={currentPage === totalPages}
                      // onClick={() => handlePageChange(currentPage + 1)}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50 hover:bg-green-300 "
                    >
                      <RightIcon/>
                    </button>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

      </div>
    </div>

  ) : (
    <div className="flex justify-center">
      <Loading />
    </div>
  );
}

export default AdminDashboard