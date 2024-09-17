import { XmlTag } from "./tag";
export type TGeneratorOptions = {
    version: string | number;
    encoding: string;
};
export declare class XMLGenerator {
    private readonly __root;
    private readonly __options;
    constructor(root: XmlTag, options?: TGeneratorOptions);
    get xml(): string;
}
