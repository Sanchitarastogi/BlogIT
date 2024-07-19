import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../constants";

export const NewBlog = ({ setRefresh }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(API_URL, {
        title,
        article: description,
        author,
        date,
      })
      .then(() => {
        setRefresh(true);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
    setTitle("");
    setDescription("");
    setAuthor("");
    setDate("");
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center" id="post">
        Create a New Blog Post
      </h2>
      <form className="space-y-6">
        <div className="sm:col-span-4">
          <label className="mt-6" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
          <label className="mt-6" htmlFor="description">
            Description
          </label>
          <textarea
            type="text"
            id="description"
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
          <label className="mt-6" htmlFor="author">
            Author
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
          <label className="mt-6" htmlFor="cdate">
            Created Date
          </label>
          <input
            type="date"
            id="cdate"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  "
            required
          />
          <div className="mt-6 flex items-center justify-center gap-x-6">
            <button
              type="submit"
              onClick={handleSubmit}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Publish
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
