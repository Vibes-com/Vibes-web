
export interface GalleryItem {
  gallery_id: string;
  name: string;   
  type: string; 
  image_alt: string; 
}

export interface GalleryResponse {
  status: number;
  msg: string;
  total: number;
  gallery: GalleryItem[];
}
