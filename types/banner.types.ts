export interface Banner {
    id: string;
    title: string;
    image_url: string;
    mobile_image_url: string;
    link_url: string | null;
    is_active: boolean;
    show_order: string;
    createdAt: string;
    updatedAt: string;
     banner_type: "video" | "image";
      banner: string;
}

export interface BannerResponse {
    statusCode: number;
    success: boolean;
    message: string;
    data: Banner[];
    banners: Banner[];
}