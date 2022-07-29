interface OriginOption {
    category: string;
    details: string[];
    title: string;
}
interface AddedStatusOption {
    category: string;
    title: {
        content: string;
        status: boolean;
    };
    details: {
        text: string;
        status: boolean;
    }[];
}
interface ProductInfo {
    imgSource: string[];
    productName: string;
    productPrice: number;
    category: string;
    type: string;
    quickShip: boolean;
    styleOptions: {
        title: keyof optionsText;
        details: {
            text: string;
            id: string;
        }[];
    }[];
}
interface NowUserWantedProduct {
    quantity: number;
    color: string;
    size: string;
    IDString: string;
    productInfo: ProductInfo;
}
interface optionsText {
    color: string;
    size: string;
}
export { OriginOption, AddedStatusOption, ProductInfo, NowUserWantedProduct };
