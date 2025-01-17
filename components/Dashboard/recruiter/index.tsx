import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
    getJobsCreated,
    getRecruiterStats,
} from "@/api-endpoints/jobs/jobs.api";
import AdminLayout from "@/layouts/adminLayout";
import CreatedJobCard from "@/components/jobCard/CreatedJobCard";
import { ApplicantsTab } from "./applicants/ApplicantTab";
import { ApplicantAccordion } from "./applicants/ApplicantAccordion";
import { ApplicantsStatsCard } from "./applicants/StatsCard";

const Recruiter = (): JSX.Element => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);


    const { data: fetchCreatedJobs } = useQuery(["createdJobs"], () =>
        getJobsCreated()
    );
    const allCreatedJObs = fetchCreatedJobs?.data;

    const { data } = useQuery(["recruiterStat"], () => getRecruiterStats());
    const recruiterStat = data?.data;

    return (
        <AdminLayout>
            <div className="flex flex-col justify-between space-y-10">
                <h1 className="text-dark_black font-medium text-lg md:font-bold md:text-2xl lg:text-xl">
                    Dashbaord
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <ApplicantsStatsCard
                        title="Jobs"
                        data={`${recruiterStat?.totalJobs ?? 0}`}
                    />
                    <ApplicantsStatsCard
                        title="Applicants"
                        data={`${recruiterStat?.totalApplicants ?? 0}`}
                    />
                    <ApplicantsStatsCard title="Interview Schedule" data="-" />
                    <ApplicantsStatsCard title="Rejected" data="-" />
                </div>

                <div className="space-y-4">
                    <div className="w-full md:w-1/2">
                        <ApplicantsTab
                            buttons={["Created Jobs", "Applicants"]}
                            selectedIndex={selectedIndex}
                            setSelectedIndex={setSelectedIndex}
                        />
                    </div>

                    <div role="tabPanels">
                        {!allCreatedJObs ? (
                            <h5 className="text-lg font-medium text-gray-300">Loading...</h5>
                        ) : (
                            <>
                                {selectedIndex === 0 ? (
                                    <div role="tabPanel">
                                        <div className="space-y-4 -border border-red-300">
                                            {allCreatedJObs.map((cJob) => (
                                                <CreatedJobCard
                                                    key={cJob?._id}
                                                    title={cJob?.title}
                                                    industry={cJob?.industry}
                                                    postDate={cJob?.createdAt}
                                                    experience={cJob?.experience}
                                                    status={cJob?.status}
                                                    location={cJob?.location}
                                                    promoted={cJob?.promoted}
                                                    publish={cJob?.publish}
                                                    expiry={cJob?.expiry}
                                                    type={cJob?.type}
                                                    description={cJob?.description}
                                                    benefit={cJob?.benefit}
                                                    requirement={cJob?.requirement}
                                                    salary={`${cJob?.salary?.currency || ""} ${cJob?.salary?.min || ""
                                                        } - ${cJob?.salary?.max || ""}  ${cJob?.salary?.period || ""
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div
                                        role="tabPanel"
                                        className="bg-white rounded-xl space-y-6 p-4 md:p-6"
                                    >
                                        <div className="space-y-4 -border border-red-300">
                                            {allCreatedJObs.map((applicant) => (
                                                <ApplicantAccordion
                                                    key={applicant?._id}
                                                    _id={applicant?._id}
                                                    title={applicant?.title}
                                                    description={applicant?.description}
                                                    applicants={applicant?.applicants}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Recruiter;
