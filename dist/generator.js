import { XmlTag } from "./tag";
export class XMLGenerator {
    __root;
    __options;
    constructor(root, options = {
        version: "1.0",
        encoding: "UTF-8"
    }) {
        this.__root = root;
        this.__options = options;
    }
    get xml() {
        const { __root, __options } = this;
        return `<?xml version="${__options.version}" encoding="${__options.encoding}"?>${__root.xml}`;
    }
}
