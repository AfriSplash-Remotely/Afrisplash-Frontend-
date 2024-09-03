import api from "@/utils/axios";
import {
	IJobApiResponse,
	ICreateJobApiResponse,
	IJobDetailResponse,
	IJobApplyResponse,
	IRecruiterStatRespone,
	IRecruiterJobCreatedRes,
	JobApplicants, IXJobResponse
} from "./jobs.interface";

export const fetchAllJobs = async (): Promise<IJobApiResponse> => {
	const { data } = await api.get("/jobs");
	return data;
};

export const createJob = async (
	jobPayload: object
): Promise<ICreateJobApiResponse> => {
	const { data } = await api.post("/jobs", jobPayload);
	return data;
};

export const fetchJobDetails = async (
	jobId: string
): Promise<IJobDetailResponse> => {
	const { data } = await api.get(`/jobs/v/${jobId}`);
	return data.data;
};

export const applyForJob = async (
	jobId: string
): Promise<IJobApplyResponse> => {
	const { data } = await api.post(`/jobs/a/${jobId}`);
	return data;
};

export const applyForJobForm = async ({ jobId, payload }: { jobId: string, payload: object }): Promise<IJobApplyResponse> => {
	const { data } = await api.post(`/jobs/form-apply/${jobId}`, payload)
	return data;
}

export const saveJob = async (jobId: string): Promise<IJobApplyResponse> => {
	const { data } = await api.patch(`/candidate/job/save/${jobId}`);
	return data;
};

export const searchJobByType = async (
	type: string
): Promise<IJobApiResponse> => {
	const { data } = await api.get(`/jobs/search/t/${type}`);
	return data.data;
};

export const searchJobByCompany = async (
	company: string
): Promise<IJobApiResponse> => {
	const { data } = await api.get(`/jobs/search/c/${company}`);
	return data.data;
};

export const searchJobByLocation = async (
	location: string
): Promise<IJobApiResponse> => {
	const { data } = await api.get(`/jobs/search/l/${location}`);
	return data.data;
};

export const searchJobByDate = async (
	date: string
): Promise<IJobApiResponse> => {
	const { data } = await api.get(`/jobs/search/d/${date}`);
	return data.data;
};

export const getAllSavedJobs = async (): Promise<IJobApiResponse> => {
	const { data } = await api.get(`/candidate/jobs/save-apply?jobType=saved`);
	return data.data;
};

export const getAllAppliedJobs = async (): Promise<IJobApiResponse> => {
	const { data } = await api.get(`/candidate/jobs/save-apply?jobType=applied`);
	return data.data;
};

export const getRecruiterStats = async (): Promise<IRecruiterStatRespone> => {
	const { data } = await api.get("/recruiter/dashboard");
	return data;
};

export const getJobsCreated = async (): Promise<IRecruiterJobCreatedRes> => {
	const { data } = await api.get("/jobs/p");
	return data;
};

export const getXJobs = async (page = 1, searchTerm = ''): Promise<IXJobResponse> => {
	const endpoint = searchTerm ? `/xjobs/search?q=${searchTerm}&page=${page}` : `/xjobs?page=${page}`;
	const { data } = await api.get(endpoint);
	return data;
};

export const getApplicants = async (jobId: string): Promise<JobApplicants> => {
	const { data } = await api.get(`/jobs/v/${jobId}`);
	return data;
};
