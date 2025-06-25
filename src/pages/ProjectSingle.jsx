import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import PageHeader from '../components/A-pageheader';
import ProjectSidebar from '../components/project-details/ProjectSidebar';
import ProjectContent from '../components/project-details/ProjectContent';

const ProjectSingle = () => {
    return (
        <>
            <PageHeader 
                title="Real-time financial"
                subtitle="risk detection"
                breadcrumbs={[
                    { name: "home", path: "/" },
                    { name: "Projects", path: "/projects" },
                    { name: "Real-time financial risk detection", active: true }
                ]}
            />

            <div className="page-project-single">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <ProjectSidebar />
                        </div>
                        <div className="col-lg-8">
                            <ProjectContent />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ProjectSingle; 