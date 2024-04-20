import React from "react";

const Tag = () => {
  const tags = [
    { id: 1, name: "#Harem", url: "/tags/harem-novel" },
    { id: 2, name: "#System", url: "/tags/system-novel" },
    { id: 3, name: "#Overpowered", url: "/tags/overpowered-novel" },
    { id: 4, name: "#Reincarnation", url: "/tags/reincarnation-novel" },
    { id: 5, name: "#Kingdombuilding", url: "/tags/kingdombuilding-novel" },
    { id: 6, name: "#Evolution", url: "/tags/evolution-novel" },
    { id: 7, name: "#Magic", url: "/tags/magic-novel" },
    { id: 8, name: "#Action", url: "/tags/action-novel" },
    { id: 9, name: "#Adventure", url: "/tags/adventure-novel" },
    { id: 10, name: "#Weaktostrong", url: "/tags/weaktostrong-novel" },
  ];
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-4 gap-4 ">
        {tags.map((item, index) => (
          <div
            key={item.id}
            className="  border-2 ml-2 pt-2 pl-2 rounded-full border-rose-600 overflow-hidden"
          >
            <p className="italic text-base font-normal">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tag;
