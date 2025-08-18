import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import BlogsPortalListings from "../../component/Blogs & Landing Page/BlogsPortalListings";
import HeroBanner from "../../component/Common Banner Component/HeroBanner";

const BlogsScreen = () => {
  return (
    <Fragment>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <HeroBanner
          Heading="Blogs Listing"
          Paragraph={"Blog Portal"}
          bgImg={"/images/creatives/plane-hero-bg.png"}
          sideLinks={false}
      />
      <BlogsPortalListings />
    </Fragment>
  );
};

export default BlogsScreen;
