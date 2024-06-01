import PropTypes from "prop-types";
import { proxyUrl } from "../../api/apiProxy";
import { formatNumber } from "../../ultis/convertNumber";
import { capitalizeFirstLetter } from "../../ultis/capitalizeFirstLetter ";
import { addToLibrary } from "../../ultis/utilsAccount";
export const EachItemHistories = ({ item }) => {
  console.log("item in EachItemHistories", item);
  return (
    <>
      <li className="flex flex-row mb-8">
        <a
          className="overflow-hidden flex-none mr-6"
          href="/book/awakening-the-weakest-talent-only-i-level-up_23151082706386505"
          title="Awakening The Weakest Talent: Only I Level Up"
          data-report-eid="qi_B03"
          data-report-bid="23151082706386505"
        >
          <img
            data-original="//book-pic.webnovel.com/bookcover/23151082706386505?imageMogr2/thumbnail/150&imageId=1662373431462"
            width="140"
            height="186"
            alt="Awakening The Weakest Talent: Only I Level Up"
            className="block"
            src={proxyUrl(item?.novel?.imageUrl)}
          />
        </a>
        <div className="flex-1 relative ">
          <h3 className="pt-1 mb-1 text-lg leading-6 font-bold truncate">
            <a
              className="text-black"
              href="/book/awakening-the-weakest-talent-only-i-level-up_23151082706386505"
              title="Awakening The Weakest Talent: Only I Level Up"
              data-report-eid="qi_B03"
              data-report-bid="23151082706386505"
            >
              Awakening The Weakest Talent: Only I Level Up
            </a>
          </h3>
          <p className="text-gray-600 mb-2">
            <a title="Magical Realism" href="/stories/novel-urban-male">
              Magical Realism
            </a>
          </p>

          <a
            href="/book/awakening-the-weakest-talent-only-i-level-up_23151082706386505"
            className="text-[16px] leading-6 text-black line-clamp-4 	 overflow-hidden"
            title={item?.novel?.description}
          >
            {item?.novel?.description}
          </a>
          <div className="absolute bottom-0 left-0 text-gray-600 text-sm">
            <strong className="text-xl">{item?.lastReadChapter}</strong>/
            {item?.novel?.chapters} Progress
          </div>
          <div className="absolute flex  bottom-0 right-0 text-[15px] gap-4">
            <a
              className=" text-blue-500 hover:cursor-pointer flex flex-row h-fit mt-4"
              title="Continue Reading"
            >
              <span className="">Continue Reading</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                id="Layer_1"
                width="16px"
                height="16px"
                viewBox="0 0 64 64"
                enableBackground="new 0 0 64 64"
                xmlSpace="preserve"
                className="mt-[2px]"
              >
                <g>
                  <polyline
                    fill="none"
                    stroke="blue"
                    strokeWidth="2"
                    strokeLinejoin="bevel"
                    strokeMiterlimit="10"
                    points="31,15 48,32    31,49  "
                  />
                </g>
                <g>
                  <polyline
                    fill="none"
                    stroke="blue"
                    strokeWidth="2"
                    strokeLinejoin="bevel"
                    strokeMiterlimit="10"
                    points="16,15 33,32    16,49  "
                  />
                </g>
              </svg>
            </a>
            <a
              className="ml-1 hover:cursor-pointer rounded-2xl mt-4 text-blue-500 "
              title="Add to Library"
              onClick={() => {
                addToLibrary(item?.account, item?.novel?._id).then(() => {
                  alert("Add to library successfully");
                });
              }}
            >
              Add to Library
            </a>
          </div>
        </div>
        <div className="absolute top-0 right-0">
          <a title="delete" href="###" className="text-red-500">
            <svg className="w-4 h-4">
              <use xlinkHref="#i-del"></use>
            </svg>
          </a>
        </div>
      </li>
    </>
  );
};

EachItemHistories.propTypes = {
  item: PropTypes.object.isRequired,
};
