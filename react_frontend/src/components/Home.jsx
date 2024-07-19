import React, {useState} from "react";
import { Header } from "./Header";
import { Blogs } from "./Blogs";
import { Footer } from "./Footer";
import { NewBlog } from "./NewBlog";

export const Home = () => {
  const [isRefresh, setIsRefresh] = useState(true);
  const setRefresh = (status) => {
    setIsRefresh(status)
  }
  return (
    <div>
      <Header />
      <Blogs setRefresh={setRefresh} isRefresh={isRefresh} />
      <NewBlog setRefresh={setRefresh} />
      <Footer />
    </div>
  );
};
