import React from "react";

const HEADERS = [
  { label: "Saved List", key: "savedlist" },
  {
    label: "Saved Filter",
    key: "savedfilter",
  },
  {
    label: "Search History",
    key: "searchhistory",
  },
];

const Header = (props) => {
  const handleOnChange = (e) => {
    props.onSearchTextChange(e.target.value);
  };
  return (
    <div className="flex justify-between items-center p-2">
      <div className="flex justify-start items-center p-2 text-sm">
        {HEADERS.map((header) => {
          return (
            <div
              className={`p-2 text-center ${
                header.key === "savedlist"
                  ? "bg-blue-200 text-blue-600 rounded-sm"
                  : ""
              }`}
              key={header.key}
            >
              {header.label}
            </div>
          );
        })}
      </div>
      <div>
        <input
          type="text"
          onChange={handleOnChange}
          className="outline-2 outline-blue-200 "
          placeholder="Type to search..."
        />
      </div>
    </div>
  );
};

export default Header;
