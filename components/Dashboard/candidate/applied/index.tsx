/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllAppliedJobs, getAllSavedJobs } from "@/api-endpoints/jobs/jobs.api";
import AdminLayout from "@/layouts/adminLayout";
import ApplyJobCard from "@/components/jobCard/applyJobCard";

const styles = {
    active: "h-[48px] min-w-[162px] text-white bg-[#0D5520] rounded-[8px] flex items-center justify-center cursor-pointer",
    inactive: "h-[48px] min-w-[162px]  border-[#0D5520] border rounded-[8px] flex items-center justify-center text-[#0d5520] cursor-pointer"
}
export default function Applied(): JSX.Element {
    const [current, setCurrent] = useState<number>(0);
    const [final, setFinal] = useState<any>([])
    const fetchData = async () => {

        switch (current) {
            case 1:
                getAllSavedJobs();
            case 2:
            // Implement search by salary function
            case 3:

            case 4:
            //   implement search by category
            case 5:
            // Implement search by experience function
            default:
                return await getAllAppliedJobs();
        }
    };
    const { data:allSaved, isLoading, isError } = useQuery(['jobs', current], getAllSavedJobs);
    const { data:allApplied } = useQuery(['jobs', current], getAllAppliedJobs);
    // const { data, isLoading, isError } = useQuery(['jobs', current], fetchData);
    useEffect(() => {
        if (current === 0) {
            setFinal(allApplied);
        }
        else {
            setFinal(allSaved)
        }
    }, [current])
    
    const finalData = current === 0 ? allApplied : allSaved

    const jobCount = finalData?.data?.length;

    // console.log({ allApplied, allSaved });


    return (
        <AdminLayout>
            <div className="w-full flex flex-col">
                <div className="w-full flex items-center gap-6 lg:gap-8">
                    <button className={current === 0 ? styles.active : styles.inactive} onClick={() => setCurrent(0)}>
                        Applied jobs
                    </button>
                    <button className={current === 1 ? styles.active : styles.inactive} onClick={() => setCurrent(1)}>
                        Saved jobs
                    </button>
                </div>

                {
                    current === 0 && (
                        <div>

                            {isLoading ? (
                                <div className="py-10">
                                    <p>Loading....</p>
                                </div>
                            ) : (<>

                                <div className="my-8 font-medium">Jobs Found (<span>{jobCount}</span>)</div>

                                {/* @ts-ignore */}
                                {finalData?.map((job): JSX.Element => {

                                    return (
                                        <div key={job?._id}>
                                            <ApplyJobCard
                                                isApplied
                                                _id={job?._id}
                                                forDashboard={true}
                                                image={job?.jobDetails?._company?.logo}
                                                alt={job?.jobDetails?._company?.name}
                                                company={job?.jobDetails?._company?.name}
                                                service={job?.jobDetails?.service}
                                                employees={job?.jobDetails?._company?.staff}
                                                offer={job?.jobDetails?.title}
                                                salary={`${job?.jobDetails?.salary?.min ? job?.jobDetails?.salary?.min : ""} - ${job?.jobDetails.salary?.max ? job?.jobDetails.salary?.max : ""}`}
                                                postDate={job?.jobDetails?.createdAt}
                                                status={job?.jobDetails?.status}
                                                promoted={job?.jobDetails?.promoted}
                                                isDirectApply={job?.jobDetails?.isDirectApply}
                                            />
                                        </div>
                                    );
                                })}
                            </>)}
                        </div>
                    )
                }
                {
                    current === 1 && (
                        <div>

                            {isLoading ? (
                                <div className="py-10">
                                    <p>Loading....</p>
                                </div>
                            ) : (<>
                                <div className="my-8 font-medium">Jobs Found (<span>{finalData?.total || 0}</span>)</div>
                                {/* @ts-ignore */}
                                {allSaved?.map((job): JSX.Element => {

                                    return (
                                        <div key={job?._id}>
                                            <ApplyJobCard
                                                isApplied={false}
                                                _id={job?._id}
                                                forDashboard={true}
                                                image={job?.jobDetails?._company?.logo}
                                                alt={job?.jobDetails?._company?.name}
                                                company={job?.jobDetails?._company?.name}
                                                service={job?.jobDetails?.service}
                                                employees={job?.jobDetails?._company?.staff}
                                                offer={job?.jobDetails?.title}
                                                salary={`${job?.jobDetails?.salary?.min ? job?.jobDetails?.salary?.min : ""} - ${job?.jobDetails.salary?.max ? job?.jobDetails.salary?.max : ""}`}
                                                postDate={job?.jobDetails?.createdAt}
                                                status={job?.jobDetails?.status}
                                                promoted={job?.jobDetails?.promoted}
                                                isDirectApply={job?.jobDetails?.isDirectApply}
                                            />
                                        </div>
                                    );
                                })}
                            </>)}
                        </div>
                    )
                }
                {isError ? (<div className="py-4">
                    <p>No jobs found</p>
                </div>) : null}

            </div>
        </AdminLayout>

    )
}


