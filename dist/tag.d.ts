export type TXmlTag = {
    tagName: string;
    data?: string | number;
    properties?: {
        [key: string]: string | number;
    };
};
export declare class XmlTag {
    protected readonly __initializer: TXmlTag;
    protected _childs: XmlTag[];
    private _xmlText;
    constructor(initializer: TXmlTag);
    append(...tags: XmlTag[]): this;
    get xml(): string;
}
