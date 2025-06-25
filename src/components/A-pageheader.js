import React from "react";
import { Link } from "react-router-dom";

const PageHeader = ({ title, subtitle, breadcrumbs, meta }) => {
  return (
    <div className="page-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            {/* Page Header Box Start */}
            <div className="page-header-box">
              <h1 className="wow fadeInUp" data-cursor="-opaque">
                {title} {subtitle && <span>{subtitle}</span>}
              </h1>
              {breadcrumbs && (
                <nav className="wow fadeInUp" data-wow-delay="0.2s">
                  <ol className="breadcrumb">
                    {breadcrumbs.map((crumb, index) => (
                      <li className={`breadcrumb-item ${crumb.active ? 'active' : ''}`} key={index}>
                        {crumb.path ? <Link to={crumb.path}>{crumb.name}</Link> : crumb.name}
                      </li>
                    ))}
                  </ol>
                </nav>
              )}
              {meta && (
                <div className="post-single-meta wow fadeInUp" data-wow-delay="0.2s">
                  <ol className="breadcrumb">
                    {meta.map((item, index) => (
                      <li key={index}><i className={item.icon}></i>{item.text}</li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
            {/* Page Header Box End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
