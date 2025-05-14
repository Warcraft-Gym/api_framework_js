class Map {
    constructor(data = {}) {
        this.id = data.id || null;
        this.name = data.name || '';
        this.shortname = data.shortname || '';
        this.image = data.image || '';
    }

    toObject() {
        return {
            id: this.id,
            name: this.name,
            shortname: this.shortname,
            image: this.image
        };
    }

    toString() {
        return `Map(id=${this.id}, name=${this.name}, shortname=${this.shortname}, image=${this.image})`;
    }
}

export default Map;
