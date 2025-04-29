
import { Fragment } from "react";
import SearchSection from "../Searchpost/SearchSection";
import BlogSection from "../Home/Latestblog";
import FeatureBlog from "../Home/Featuredblog";
import MarketingBlog from "../Home/Marketingblog";
import ExpertBlog from "../Home/ExpertSpeak";

const Blog = (props) => {
 

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
