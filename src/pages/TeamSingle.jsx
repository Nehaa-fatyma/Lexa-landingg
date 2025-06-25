import React from 'react';
import PageHeader from '../components/A-pageheader';
import Footer from '../components/Footer';
import TeamSingleSidebar from '../components/team-details/TeamSingleSidebar';
import TeamSingleContent from '../components/team-details/TeamSingleContent';

const TeamSingle = () => {
    return (
        <>
            <PageHeader
                title="Brooklyn"
                subtitle="simmons"
                breadcrumbs={[
                    { name: "home", path: "/" },
                    { name: "team", path: "/team" },
                    { name: "Brooklyn simmons", active: true }
                ]}
            />
            <div className="page-team-single">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <TeamSingleSidebar />
                        </div>
                        <div className="col-lg-8">
                            <TeamSingleContent />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default TeamSingle; 