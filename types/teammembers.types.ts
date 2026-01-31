export interface TeamMember {
  member_id: string;
  member_fname: string;
  member_lname: string;
  member_department: string;
  member_role: string;
  member_image: string;
  member_description: string;
  image_alt:string
}

export interface TeamResponse {
  status: string;
  member_list: TeamMember[];
}