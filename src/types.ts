
export interface product {
        id: number,
        title: string,
        description: string,
        price: number,
        rating: number,
        thumbnail: string
    }
    
export interface Iuser {
    userId: string | null;
    username: string | null;
    loading: boolean;
    error: string | null;
    
} 

export interface Icart {product: product , quantity: number};

export interface Inputs{
    username: string;
    password: string;
}