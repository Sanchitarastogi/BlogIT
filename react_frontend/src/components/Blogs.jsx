import React, { useEffect, useState } from "react";
import { DeleteBlog } from "./DeleteBlog";
import axios from "axios";
import { API_URL } from "../constants";

export const Blogs = ({ isRefresh, setRefresh }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    if (isRefresh) {
      fetchData();
    }
  }, [isRefresh, setRefresh]);

  const fetchData = async () => {
    const response = await axios.get(API_URL);
    setRefresh(false);
    setBlogs(response.data);
  };
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
    mt-10 px-10 md:px-15 lg:px-32"
    >
      {blogs.length > 0
        ? blogs.map((item) => (
            <div key={item.pk} className="m-4 cursor-pointer">
              <h3 className="font-bold mt-3">{item.title}</h3>
              <h3 className="line-clamp-3 text-gray-400 mt-3">
                {item.article}
              </h3>
              <div className="ml-2">
                <h3 className="font-bold text-[12px]">{item.author}</h3>
                <h3 className="text-gray-500 text-[10px]">
                  {item.created_date}
                </h3>
              </div>
              <DeleteBlog
                className="mt-3"
                pk={item.pk}
                blogs={blogs}
                setRefresh={setRefresh}
              />
            </div>
          ))
        : null}
    </div>
  );
};
