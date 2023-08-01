export interface Post {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  author: Author;
  body: Body[];
  mainImage: MainImage;
  publishedAt: string;
  slug: Slug;
  title: string;
  _updatedAt: string;
}

export interface Author {
  _ref: string;
  _type: string;
}

export interface Body {
  _key: string;
  _type: string;
  children: Children[];
  markDefs: any[];
  style: string;
}

export interface Children {
  _key: string;
  _type: string;
  marks: any[];
  text: string;
}

export interface MainImage {
  _type: string;
  asset: Asset;
  crop: Crop;
  hotspot: Hotspot;
}

export interface Asset {
  _ref: string;
  _type: string;
}

export interface Crop {
  _type: string;
  bottom: number;
  left: number;
  right: number;
  top: number;
}

export interface Hotspot {
  _type: string;
  height: number;
  width: number;
  x: number;
  y: number;
}

export interface Slug {
  _type: string;
  current: string;
}
