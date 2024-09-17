export class XmlTag {
    __initializer;
    _childs = [];
    _xmlText;
    constructor(initializer) {
        this.__initializer = initializer;
    }
    append(...tags) {
        if (!this.__initializer.data) {
            this._childs.push(...tags);
        }
        return this;
    }
    get xml() {
        if (this._xmlText) {
            return this._xmlText;
        }
        const { tagName, data, properties } = this.__initializer;
        let textOfProperties = "";
        let textOfChilds = data ?? "";
        // Generate properties
        const propertyEntries = Object.entries(properties ?? {});
        if (propertyEntries.length > 0) {
            const propertyTextCollection = [];
            // Generate text of properties
            for (const [key, value] of propertyEntries) {
                propertyTextCollection.push(`${key}="${value}"`);
            }
            textOfProperties = propertyTextCollection.join(" ");
        }
        if (!textOfChilds) {
            // Generate childs
            for (const child of this._childs) {
                textOfChilds += child.xml;
            }
        }
        const textOfPropertiesTrimed = textOfProperties.trim();
        return `<${tagName}${!textOfPropertiesTrimed ? textOfPropertiesTrimed : " " + textOfPropertiesTrimed}>${textOfChilds}</${tagName}>`;
    }
}
