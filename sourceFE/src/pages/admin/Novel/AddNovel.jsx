import React, { useState } from 'react'
import { addAccount } from '../../../ultis/utilsAccount';
import { Link, useNavigate } from 'react-router-dom';
import { SelectComponent } from '../../../components/Select/SelectComponent';
import { Loading } from '../../../components/UI/Loading';
import { addNovel } from '../../../ultis/utilsNovel';
import AdBanner from '../../../components/admin/AdBanner';
import useImageUpload from '../../../hooks/useCloud';
import useCategory from '../../../hooks/useCategory';
import useAuthor from '../../../hooks/useAuthor';

import { toast } from "react-toastify";
const AddNovel = () => {
  const navigate = useNavigate()
  const [userSelect, setUserSelect] = useState({ 
    view: 0,
    name:"",
    chapters:0,
    powerStone:0,
    description:"",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserSelect((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  const [loading, setLoading] = useState(false)
  const [authorOption, setAuthorOption] = useState(
    () => {
      const authorAll = JSON.parse(localStorage.getItem('authorsAll'));
      if (authorAll.length > 0) {
        return authorAll?.map((auth, index) => ({
          value: auth._id,
          label: auth?.name
        }))
      }
      else {
        return [];
      }
    })

  const [cateOption, setCateOption] = useState(() => {
    const cateAll = JSON.parse(localStorage.getItem('categoryAll'));
    console.log(cateAll);
    if (cateAll.length > 0) {
      return cateAll?.map((cate, index) => ({
        value: cate._id,
        label: cate?.name
      }))
    }
    else {
      return []
    }
  })
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [error, setError] = useState("")
  const uploadUrl = useImageUpload(selectedFiles);
  const handleFileChange = (e) => {
    const selectFile = e.target.files[0];
    setSelectedFiles(selectFile);
  };

  const validateNovel = (novel) => {
    if (novel.views === "" || novel.chapters === "" || novel.powerStone === "" || novel.name === "") {
      return true
    }
    return false;
  }
  // console.log(authorOption);
  const handleSubmit = (e) => {
    e.preventDefault();
    let newUser = userSelect

    if (validateNovel(newUser)) {
      setError("Value of Views, PowerStone, Chapters and Name is not null")
      return;
    }
    setLoading(true)
    if (uploadUrl !== null) {
      newUser = { ...newUser, imageUrl: uploadUrl }
    }
    console.log(newUser);
    addNovel(newUser).then((res) => {
      console.log(res);
      if (res.status == 200 || res.status == 202) {
        // alert("Add novel successful")
        toast.success(`Create new novel successful!`, {
          autoClose: 1000,
        });
      }
      else {
        toast.success(`Couldn't add novel\n `, {
          autoClose: 1000,
        });
        console.log("Couldn't add novel\n ", err.response.data.message)
      }
      setLoading(false)
      navigate("/novels")
    }).catch((err) => {
      console.log("err: ", err.response.data.message);
      toast.success(`Couldn't add novel `, {
        autoClose: 1000,
      });
      // alert("Couldn't add novel\n" + err.response.data.message)
      setLoading(false)
      navigate("/novels")
    })
  }

  // console.log(uploadUrl);
  console.log(userSelect);
  return !loading ? (
    <div className=" flex flex-col justify-center items-center mx-auto bg-slate-200  w-screen   max-w-[1080px]  ">
      <div className='pb-5'>
        <AdBanner name={""} />
      </div>
      <div className="w-[1020px]  flex items-center justify-center py-10">

        <div className=" p-10 space-y-4 bg-white rounded-lg shadow-md h-[600px] ">
          <Link to="/novels" className="rounded-md border-2 bg-slay-200 px-2 absolute z-10 text-red-400">Back</Link>
          <h2 className="text-2xl font-bold text-center text-purple-700">
            Add Novel
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>

            <div className="flex flex-row">
              <label htmlFor="name" className="px-4 py-2  ">
                Name{" "}
              </label>

              <input
                type="text"
                id="name"
                name="name"
                onChange={handleInputChange}
                placeholder="Name"
                value={userSelect?.name || ""}
                className="w-[250px]  px-8 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <label htmlFor="powerStone" className="px-4 py-2  ">
                Power Stone{" "}
              </label>

              <input
                type="number"
                min ="0"
                id="powerStone"
                name="powerStone"
                onChange={handleInputChange}
                placeholder="powerStone"
                value={userSelect?.powerStone || 0}
                className="w-[100px]  px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <label htmlFor="chapters" className="px-4 py-2 ">
                Chapters{" "}
              </label>

              <input
                type="number"
                id="chapters"
                min ="0"
                name="chapters"
                onChange={handleInputChange}
                placeholder="chapters"
                value={userSelect?.chapters || 0}
                className="w-[100px]  px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className='flex flex-row'>
              <label htmlFor="author" className="px-4 py-2 ">
                Author{" "}
              </label>

              <SelectComponent
                className={"w-full  px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"}
                value={authorOption.find(option => option.value === userSelect.author) || authorOption[0]}
                name='author'
                options={authorOption}
                isRequired={true}
                isMulti={false}
                closeMenuOnSelect={false}
                onChange={handleInputChange}
              />

              <label htmlFor="category" className="px-4 py-2 ">
                Category{" "}
              </label>

              <SelectComponent
                className={"w-full  px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"}
                value={cateOption.find(option => option.value === userSelect.category) || cateOption[0]}
                name='category'
                options={cateOption}
                isRequired={true}
                isMulti={false}
                closeMenuOnSelect={false}
                onChange={handleInputChange}
              />
            </div>
            <div className='flex flex-row'>
              <label htmlFor="description" className="px-4 py-2 ">
                Image{" "}
              </label>

              <input
                type="file"
                id="fileupload"
                name="chapters"
                onChange={handleFileChange}
                placeholder="chapters"
                accept="image/*"
                className="w-2/3  px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            {uploadUrl !== null && <p className='px-4 py-2 text-green-300'>Upload file successful !!</p>}
            <div className="flex flex-row">
              <label htmlFor="description" className="px-4 py-2 ">
                Description{" "}
              </label>

              <textarea
                type="text"
                id="description"
                name="description"
                onChange={handleInputChange}
                placeholder="description"
                value={userSelect?.description || ""}
                className="w-2/3 h-[150px] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className='mt-10'>
              <div>
                {error !== "" ? <div className="text-red-500 mb-1">{error}</div> : <></>}
              </div>
              <button
                type="submit"
                className="w-[100px] py-2 text-white bg-purple-500 rounded-md hover:bg-purple-600"
              >
                Save
              </button>

            </div>
          </form>
        </div>

      </div>
    </div>
  ) : (
    <div className="flex justify-center">
      <Loading />
    </div>
  )
}

export default AddNovel