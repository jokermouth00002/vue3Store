interface Content {
    img: string;
    slogan: string;
    text: string;
}
export declare class CollectionItem {
    title: {
        text: string;
        kind: string;
    }[];
    bedRoom: {
        items: string[];
        contents: Content[];
    };
    furniture: {
        items: string[];
        contents: Content[];
    };
    kitchen: {
        items: string[];
        contents: Content[];
    };
    dining: {
        items: string[];
        contents: Content[];
    };
    constructor();
}
export {};
