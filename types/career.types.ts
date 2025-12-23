// Single Job item
export interface Job {
  career_id: string;
  tech_job: string;
  job_type: "1" | "2" | "3"; // can also change to number if backend changes
  job_description: string; // HTML string
  job_status: "0" | "1";
  job_title: string;
  assignment_status: "yes" | "no";
}

// API Response
export interface JobListResponse {
  status: number;
  msg: string;
  total: number;
  jobs: Job[];
}
