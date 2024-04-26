import { useState } from "react";
import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";

export const ModalHeader = ({ dataModal }) => {
  const genres = dataModal;
  const [selectedGenrez, setSelectedGenrez] = useState(Object.keys(genres)[0]);

  const [selectedGenre, setSelectedGenre] = useState(genres["Novels"]);
  return (
    <>
      <div
        className="absolute top-full left-0 hover:cursor-auto	"
        onMouseLeave={() => setSelectedGenre(genres["Novels"])}
        onClick={(event) => {
          event.preventDefault();
        }}
      >
        <div className="flex  flex-row bg-gray-800 h-max-[340px] h-[340px] w-max-[640px] w-[640px] rounded-lg ">
          <div className=" flex flex-col text-white pt-2 text-[21px] font-bold  bg-black h-max-[340px] h-[340px] w-max-[120px] w-[120px] rounded-tl-lg	rounded-bl-lg ">
            {Object.keys(genres)?.map((genre, index) => (
              <NavLink
                to={
                  "/genres/" +
                  genre.toLowerCase().replace("_", "-").replace(" ", "-")
                }
                key={index}
                className={
                  genre === selectedGenrez
                    ? "py-2 pr-6 bg-blue-700 -lg hover:cursor-pointer  "
                    : "py-2 pr-6 hover:cursor-pointer "
                }
                onMouseEnter={() => {
                  setSelectedGenre(genres[genre]);
                  setSelectedGenrez(genre);
                }}
              >
                {genre.replace("_", "-")}
              </NavLink>
            ))}
          </div>
          <div className="flex flex-col flex-wrap h-max-[300px]   ">
            {selectedGenre?.data?.map((genre, index) => (
              <div key={index} className="text-left">
                {selectedGenre.data.length > 1 ? (
                  <strong className="text-left text-gray-500 text-[13px] pl-4  uppercase ">
                    {index === 0 ? "male lead" : "female lead"}
                  </strong>
                ) : (
                  ""
                )}
                <div
                  className={
                    selectedGenre.data.length > 1
                      ? "  flex flex-col  flex-wrap h-max-[300px] h-[300px] text-left"
                      : " flex flex-col  flex-wrap h-max-[300px] h-[300px] text-left mt-2"
                  }
                >
                  {genre.map((item, index) => (
                    <NavLink
                      to={
                        "/genres/" +
                        selectedGenrez
                          .toLowerCase()
                          .replace("_", "-")
                          .replace(" ", "-") +
                        "/" +
                        item.replace(/\s/g, "-").toLowerCase()
                      }
                      key={index}
                      className="text-white text-[15px] pl-2 ml-2 h-fit font-bold line-clamp-1	 w-max-[120px] w-[120px] rounded hover:bg-blue-700 hover:cursor-pointer"
                    >
                      {item}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

ModalHeader.propTypes = {
  dataModal: PropTypes.object.isRequired,
};
