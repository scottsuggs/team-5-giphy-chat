export interface Giphy {
  data: {
    type: string;
    id: string;
    url: string;
    title?: string;
    image_url: string;
  }[];
}
