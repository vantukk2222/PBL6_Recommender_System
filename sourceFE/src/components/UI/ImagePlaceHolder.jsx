import React, { useState } from "react";
import banner1 from "../../assets/images/banner1.jpg";
import { PropTypes } from "prop-types";
const ImageWithPlaceholder = ({ source, title_img, classname, ...props }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative">
      {!imageLoaded && !imageError && (
        <img
          src={banner1}
          title={title_img}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}
      <img
        src={source}
        title={title_img}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
        className={classname + ` ${imageLoaded ? "opacity-100" : "opacity-0"}`}
        {...props}
      />
    </div>
  );
};

ImageWithPlaceholder.propTypes = {
  source: PropTypes.string.isRequired,
  title_img: PropTypes.string.isRequired,
  classname: PropTypes.string,
};

export default ImageWithPlaceholder;
