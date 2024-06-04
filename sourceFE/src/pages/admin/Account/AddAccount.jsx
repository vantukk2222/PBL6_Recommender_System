import React, { useEffect, useState } from 'react'
import { addAccount } from '../../../ultis/utilsAccount';
import { Link, useNavigate } from 'react-router-dom';
import { SelectComponent } from '../../../components/Select/SelectComponent';
import { Loading } from '../../../components/UI/Loading';
import { AddAccountValidate } from '../../../ultis/utilsAuth';
import { toast } from 'react-toastify';
const AddAccount = () => {
    const navigate = useNavigate()
    const [userSelect, setUserSelect] = useState({ role: 'customer' })
    const roleOption = [
        { value: 'customer', label: 'Customer' },
        { value: 'admin', label: 'Admin' },

    ]
    const [error, setError] = useState("");
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserSelect((prev) => ({
            ...prev,
            [name]: value,
        }));
    }
    useEffect(() => {
        setError(AddAccountValidate(userSelect))
    }, [userSelect])
    const [loading, setLoading] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userSelect);
        if (error) {
            console.log("err", error);
            return;
        }
        setLoading(true)
        addAccount(userSelect).then((res) => {
            console.log(res);
            if (res.status == 200 || res.status == 202) {
                //alert("Add user successful")
                toast.success(`Create new account successful!`, {
                    autoClose: 1000,
                });
            }
            else {
                toast.error(`Couldn't add account!`, {
                    autoClose: 1000,
                  });
                console.log("Couldn't add account\n ", err.response.data.message)
            }
            setLoading(false)
            navigate("/")
        }).catch((err) => {
            console.log("err: ", err.response.data.message);
            toast.error(`Couldn't add account! \n 
            ${err.response.data.message}`, {
                autoClose: 2000,
              });
            //alert("Couldn't add account\n" + err.response.data.message)
            setLoading(false)
            navigate("/")
        })
    }
    return !loading ? (

        <div className=" flex flex-col justify-start items-center mx-auto bg-slate-200  w-screen  max-w-[1080px]  ">

            <div className="w-[400px] flex items-center justify-center py-10">
                <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-center text-purple-700">
                        Add account
                    </h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="flex flex-row">
                            <label htmlFor="username" className="px-4 py-2 w-[100px]">
                                Username{" "}
                            </label>

                            <input
                                type="text"
                                id="username"
                                name="username"
                                onChange={handleInputChange}
                                placeholder="Username"
                                value={userSelect?.username || ""}
                                className="w-full  px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                                type="email"
                                id="email"
                                name="email"
                                onChange={handleInputChange}
                                placeholder="Email"
                                value={userSelect?.email || ""}
                                className="w-full  px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div className="flex flex-row">
                            <label htmlFor="password" className="px-4 py-2  w-[100px]">
                                Password{" "}
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
                        </div>
                        <div className="flex flex-row">
                            <label htmlFor="password" className="px-4 py-3  w-[100px]">
                                Role{" "}
                            </label>
                            <SelectComponent
                                className={"w-full  px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"}
                                value={roleOption.find(option => option.value === userSelect.role) || roleOption[0]}
                                name='role'
                                options={roleOption}
                                isRequired={true}
                                isMulti={false}
                                closeMenuOnSelect={false}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full py-2 text-white bg-purple-500 rounded-md hover:bg-purple-600"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                    <div>
                        {error !== "" ? <div className="text-red-500 mb-1">{error}</div> : <></>}
                    </div>
                </div>

            </div>

        </div>
    ) : (
        <div className="flex justify-center">
            <Loading />
        </div>
    )
}

export default AddAccount