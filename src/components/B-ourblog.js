import React from "react";

const blogPosts = [
  {
    title: "Natural Language Processing The AI Frontier",
    image: "images/post-1.jpg",
    link: "blog-single.html",
    delay: "0s",
  },
  {
    title: "AI in Healthcare Transforming Patient Care",
    image: "images/post-2.jpg",
    link: "blog-single.html",
    delay: "0.2s",
  },
  {
    title: "Unlocking the Power of Predictive Analytics",
    image: "images/post-3.jpg",
    link: "blog-single.html",
    delay: "0.4s",
  },
  {
    title: "Unlocking the Power of Natural Language",
    image: "images/post-4.jpg",
    link: "blog-single.html",
    delay: "0.6s",
  },
  {
    title: "Pioneering AI  Natural Language Understanding",
    image: "images/post-5.jpg",
    link: "blog-single.html",
    delay: "0.8s",
  },
  {
    title: "Revolutionizing Communication with NLP in AI",
    image: "images/post-6.jpg",
    link: "blog-single.html",
    delay: "1s",
  },
];

const BlogPage = () => {
  return (
    <div className="page-blog">
      <div className="container">
        <div className="row">
          {blogPosts.map((post, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="post-item wow fadeInUp" data-wow-delay={post.delay}>
                {/* Featured Image */}
                <div className="post-featured-image">
                  <a href={post.link} data-cursor-text="View">
                    <figure className="image-anime">
                      <img src={post.image} alt={post.title} />
                    </figure>
                  </a>
                </div>

                {/* Body */}
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

          {/* Pagination */}
          <div className="col-lg-12">
            <div className="page-pagination wow fadeInUp" data-wow-delay="1.2s">
              <ul className="pagination">
                <li>
                  <a href="#">
                    <i className="fa-solid fa-arrow-left-long"></i>
                  </a>
                </li>
                <li className="active">
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
