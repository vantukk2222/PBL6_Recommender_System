import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { AddAccountValidate } from "../../ultis/utilsAuth";
import { addAccount, updateAccount } from "../../ultis/utilsAccount";
import { toast } from "react-toastify";
import { Loading } from "../../components/UI/Loading";
export const EditProfile = ({ data, setModal }) => {
  const navigate = useNavigate();
  const [userSelect, setUserSelect] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserSelect((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  useEffect(() => {
    setError(AddAccountValidate(userSelect));
  }, [userSelect]);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    const acc = {
      id: userSelect._id,
      name: userSelect.name,
    };
    {
      error ||
        updateAccount(acc)
          .then((res) => {
            // console.log(res.data);
            if (res.status == 200) {
              toast.success(`Update account successful!`, {
                autoClose: 1000,
              });
            }
            setModal(false);
          })
          .catch((err) => {
            setLoading(false);
            toast.error(`Couldn't updated account!`, {
              autoClose: 1000,
            });
            console.log("update acc err", err);
            setModal(false);
            setUserSelect({});
          });
      setLoading(false);
    }
  };
  return !loading ? (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-400 bg-opacity-35 z-50 w-screen   ">
      <div className="w-[400px] flex items-center justify-center py-10">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <p
            className="px-2 py-1 rounded-lg bg-blue-300 w-fit h-fit hover:cursor-pointer"
            onClick={() => {
              setModal(false);
            }}
          >
            Back
          </p>
          <h2 className="text-2xl font-bold text-center text-purple-700">
            Edit account
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-row">
              <label htmlFor="username" className="px-4 py-2 w-[100px]">
                Username
              </label>

              <input
                disabled={true}
                type="text"
                id="username"
                name="username"
                onChange={handleInputChange}
                placeholder="Username"
                value={userSelect?.username || ""}
                className="hover:cursor-not-allowed	   w-full  px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex flex-row">
              <label htmlFor="name" className="px-4 py-2  w-[125px]">
                Name{" "}
              </label>

              <input
                type="text"
                id="name"
                name="name"
                onChange={handleInputChange}
                placeholder="Name"
                value={userSelect?.name || ""}
                className="w-full  px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex flex-row">
              <label htmlFor="email" className="px-4 py-2  w-[125px]">
                Email{" "}
              </label>

              <input
                disabled={true}
                type="email"
                id="email"
                name="email"
                onChange={handleInputChange}
                placeholder="Email"
                value={userSelect?.email || ""}
                className=" hover:cursor-not-allowed	w-full  px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            {/* <div className="flex flex-row">
              <label htmlFor="password" className="px-4 py-2  w-[100px]">
                Password
              </label>

              <input
                type="password"
                id="password"
                name="password"
                onChange={handleInputChange}
                placeholder="Password"
                value={userSelect?.password || ""}
                className="w-full  px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div> */}

            <div>
              <button
                type="submit"
                className="w-full py-2 text-white bg-purple-500 rounded-md hover:bg-purple-600"
              >
                Save changes
              </button>
            </div>
          </form>
          <div>
            {error !== "" ? (
              <div className="text-red-500 mb-1">{error}</div>
            ) : (
              <></>
            )}
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

EditProfile.propTypes = {
  data: PropTypes.object,
  setModal: PropTypes.func,
};
