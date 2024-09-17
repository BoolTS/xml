import { XmlTag } from "./tag";

export type TGeneratorOptions = {
    version: string | number;
    encoding: string;
};

export class XMLGenerator {
    private readonly __root: XmlTag;
    private readonly __options: TGeneratorOptions;

    constructor(
        root: XmlTag,
        options: TGeneratorOptions = {
            version: "1.0",
            encoding: "UTF-8"
        }
    ) {
        this.__root = root;
        this.__options = options;
    }

    get xml() {
        const { __root, __options } = this;

        return `<?xml version="${__options.version}" encoding="${__options.encoding}"?>${__root.xml}`;
    }
}
