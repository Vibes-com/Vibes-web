export interface ContactFormPayload {
  firstname: string;
  lastname: string;
  email: string;
  mobile_no: string;
  website?: string;
  message: string;
}

export interface ContactFormResponse {
  status: number;
  msg: string;
  data: {
    firstname: string;
    lastname: string;
    email: string;
    mobile_no: string;
    website: string;
    message: string;
    created_at: string;
  };
}