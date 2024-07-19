import React from "react";
import axios from "axios";
import { API_URL } from "../constants";

export const DeleteBlog = ({ pk, setRefresh }) => {
  const handleDelete = (pk) => {
    axios
      .delete(API_URL + pk)
      .then(() => {
        console.log("Blog Deleted");
        setRefresh(true);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <button
        className="bg-red-600 text-sm font-bold py-2 px-3 font-semibold text-white rounded-md shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        type="delete"
        onClick={() => handleDelete(pk)}
      >
        Delete
      </button>
    </div>
  );
};
