export interface iProducts {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  brand: string;
  availabilityStatus: string;
  dimensions: iDimensions;
  discountPercentage: number;
  images: string[];
  meta: iMetaData;
  minimumOrderQuantity: number;
  rating: number;
  returnPolicy: string;
  reviews: iReview[];
  shippingInformation: string;
  sku: string;
  stock: number;
  tags: string[];
  thumbnail: string;
  warrantyInformation: string;
  weight: number;
}

export interface iDimensions {
  height: number;
  width: number;
  depth: number;
}

export interface iMetaData {
  barcode: string;
  createdAt: string; // Data in formato stringa (ISO 8601)
  qrCode: string;
  updatedAt: string;
}

export interface iReview {
  rating: number;
  comment: string;
  date: string; // Data in formato stringa (ISO 8601)
  reviewerName: string;
  reviewerEmail: string;
}
