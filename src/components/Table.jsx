import React, { useState } from "react";
import Header from "./Table/Header";
const Table = (props) => {
  const [selectedUserId, setSelectedUserId] = useState(-1);
  const tableHeaders = [
    {
      label: "Name",
      key: "name",
    },
    {
      label: "User Name",
      key: "username",
    },
    {
      label: "Email",
      key: "email",
    },
    {
      label: "Action",
      key: "action",
    },
  ];
  const todaysDate = () => {
    return new Date().toJSON().slice(0, 10);
  };
  const handleUserDetailsClick = (userData) => {
    props.setUserDetails(userData);
    setSelectedUserId(userData.id);
  };
  return (
    <div>
      <section className="antialiased h-full text-gray-600 px-4" x-data="app">
        <div className="flex flex-col justify-center h-full">
          <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <Header onSearchTextChange={props.searchUser} />

            <div className="overflow-x-auto p-3" style={{ height: "400px" }}>
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th></th>
                    <th>Date</th>
                    {tableHeaders.map((th) => {
                      return (
                        <th key={th.key} className="p-2">
                          <div className="font-semibold text-left">
                            {th.label}
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                </thead>

                <tbody className="text-sm divide-y divide-gray-100">
                  {props.data.map((userData) => {
                    return (
                      <tr
                        key={userData["id"]}
                        className={`${
                          selectedUserId === userData.id ? "bg-gray-200" : ""
                        }`}
                      >
                        <td className="p-2">
                          <input
                            type="checkbox"
                            className="w-5 h-5"
                            value="id-1"
                          />
                        </td>
                        <td className="p-2">{todaysDate()}</td>
                        <td className="p-2">
                          <div className="font-medium text-gray-800">
                            {userData["name"]}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="text-left">
                            {userData["username"]}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="text-left font-medium text-green-500">
                            {userData["email"]}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="flex justify-center">
                            <button
                              onClick={() => {
                                handleUserDetailsClick(userData);
                              }}
                              className="flex justify-center items-center bg-blue-200  rounded-md text-blue-600 p-2 hover:bg-blue-300"
                            >
                              <svg
                                className="w-5 h-5 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                                />
                              </svg>
                              Details
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="flex justify-end font-bold space-x-4 text-lg border-t border-gray-100 px-5 py-4">
              <div>Total Users</div>
              <div className="text-blue-600">{props.data.length}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Table;
