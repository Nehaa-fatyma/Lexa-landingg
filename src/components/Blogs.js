import React from "react";

const blogPosts = [
  {
    title: "AI in Legal Drafting: From Prompt to Contract",
    image: "images/post-1.jpg",
    link: "blog-single.html",
    delay: "0s",
  },
  {
    title: "Regional Law Meets AI: Drafting for KSA, UAE & Beyond",
    image: "images/post-2.jpg",
    link: "blog-single.html",
    delay: "0.2s",
  },
  {
    title: "How SMEs Can Automate Legal Work Without a Lawyer",
    image: "images/post-3.jpg",
    link: "blog-single.html",
    delay: "0.4s",
  },
];

const Blog = () => {
  return (
    <div className="our-blog">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">latest blog</h3>
              <h2
                className="wow fadeInUp"
                data-wow-delay="0.2s"
                data-cursor="-opaque"
              >
                Smart legal tips, AI updates, and industry insights.
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          {blogPosts.map((post, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div
                className="post-item wow fadeInUp"
                data-wow-delay={post.delay}
              >
                <div className="post-featured-image">
                  <a href={post.link} data-cursor-text="View">
                    <figure className="image-anime">
                      <img src={post.image} alt={post.title} />
                    </figure>
                  </a>
                </div>
                <div className="post-item-body">
                  <div className="post-item-content">
                    <h2>
                      <a href={post.link}>{post.title}</a>
                    </h2>
                  </div>
                  <div className="post-item-btn">
                    <a href={post.link} className="btn-default">
                      read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
