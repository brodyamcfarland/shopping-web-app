export interface Products {
     id: number;
     title: string;
     price: number;
     description: string;
     category: string;
     image: string;
}

export interface Items {
     id: number;
     title: string;
     price: number;
     description: string;
     image: string;
     quantity: number;
     category: string;
}

export interface ProductQuery {
     products: Products[];
}
