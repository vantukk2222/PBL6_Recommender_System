import { useEffect, useState } from "react";
const CLOUDINARY_URL =
"https://api.cloudinary.com/v1_1/dlo5qxnxw/image/upload";
const CLOUDINARY_UPLOAD_PRESET = "lsq0bw9y";
const useImageUpload = ( selectedFile) => {
  const [uploadURL, setUploadURL] = useState(null);
  useEffect(() => {
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
      fetch(CLOUDINARY_URL, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.secure_url !== "") {
            const url = data.secure_url;
            setUploadURL(url);
          }
        })
        .catch(() => {
          alert("Upload image failed");
        });
    };
    
    const img = document.querySelector("#fileupload");
    img.addEventListener("change", handleImageChange);

    return () => {
      img.removeEventListener("change", handleImageChange);
    };
  }, [CLOUDINARY_URL, CLOUDINARY_UPLOAD_PRESET, selectedFile]);
  return uploadURL;
};

export default useImageUpload;
