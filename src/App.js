import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import { fetchSampleUserData } from "./globals/SampleData";
import UserDetails from "./components/UserDetails";
function App() {
  const [tableData, setTableData] = useState([]);
  const [searchedUserData, setSearchedUserData] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const setInitialTableData = async () => {
    const data = await fetchSampleUserData();
    setTableData(data);
  };

  const searchUser = (name) => {
    const filteredData = tableData.filter((tb) => {
      return tb["name"].includes(name);
    });
    setSearchedUserData(filteredData);
  };

  useEffect(() => {
    setInitialTableData();
  }, []);

  return (
    <div className="flex justify-center items-center flex-col p-24">
      <div className="grid grid-cols-5 w-full">
        <div className="col-span-4">
          <Table
            searchUser={searchUser}
            setUserDetails={setUserDetails}
            data={searchedUserData.length > 0 ? searchedUserData : tableData}
          />
        </div>
        <div className="col-span-1">
          <UserDetails userDetails={userDetails} />
        </div>
      </div>
    </div>
  );
}

export default App;
