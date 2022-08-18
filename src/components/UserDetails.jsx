import React from "react";

const UserDetails = ({ userDetails }) => {
  return (
    <div className="p-2">
      <div className="flex justify-center items-center flex-col text-md text-gray-700">
        Details
        {userDetails.name && (
          <span className="text-gray-800 font-bold">{userDetails.name}</span>
        )}
      </div>
      <div className="mt-10  border-solid border-t-2 border-b-none border-l-none border-r-none">
        {Object.keys(userDetails).length === 0 ? (
          <div className="text-center text-gray-600 text-sm">
            No user has been selected.
          </div>
        ) : (
          <div className="text-sm">
            The user details are as follows :
            <div>
              <span className="text-blue-600 text-sm font-bold">
                {" "}
                Personal Details
              </span>
              <div className={"text-gray-600"}>Phone : {userDetails.phone}</div>
            </div>
            <div className="mt-2">
              <span className="text-blue-600 text-sm font-bold">
                {" "}
                Address Details
              </span>
              <div className={"text-gray-600"}>
                Address :{" "}
                {`${userDetails.address.street}, ${userDetails.address.zipcode}`}
              </div>
              <div className={"text-gray-600"}>
                Zipcode : {`${userDetails.address.zipcode}`}
              </div>
              <div className={"text-gray-600"}>
                City : {`${userDetails.address.city}`}
              </div>
            </div>
            <div className="mt-2">
              <span className="text-blue-600 text-sm font-bold">
                {" "}
                Company Details
              </span>
              <div className={"text-gray-600"}>
                Company Name : {userDetails.company.name}
              </div>
              <div className={"text-gray-600"}>
                Website : {userDetails.website}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
