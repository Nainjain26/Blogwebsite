import styles from "./Blog.module.css";
import { Link } from "react-router-dom";
import arrow from "../../media/icons8-right-64.png";
import { Fragment } from "react";
import Pagination from "../Pagination/Pagination";
import LoaderThree from "../Loader/LoaderThree";
import PostCategory from "../PostCategory/PostCategory";
import SearchSection from "../Searchpost/SearchSection";
import BlogSection from "../Home/Latestblog";
import FeatureBlog from "../Home/Featuredblog";
import MarketingBlog from "../Home/Marketingblog";
import ExpertBlog from "../Home/ExpertSpeak";

const Blog = (props) => {
  let posts = props.posts;

  return (
    <Fragment>
      <SearchSection searchDataHandler={props.searchDataHandler} />
      {/* <PostCategory
        postCategory={props.postCategory}
        categoryHandler={props.categoryHandler}
      /> */}
      <BlogSection/>
      <FeatureBlog/>
      <MarketingBlog/>
      <ExpertBlog/>
      {/* {props.isLoader && (
        <div className={styles["loader"]}>
          <LoaderThree />
        </div>
      )} */}
    </Fragment>
    
  );
};

export default Blog;
