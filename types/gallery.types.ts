
export interface GalleryItem {
  gallery_id: string;
  name: string;   
  type: string;  
}

export interface GalleryResponse {
  status: number;
  msg: string;
  total: number;
  gallery: GalleryItem[];
}
