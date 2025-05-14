import Map from './map.js';

class Season {
    constructor(data = {}) {
        this.id = data.id || null;
        this.name = data.name || '';
        this.numberWeeks = data.number_weeks || null;
        this.seriesPerWeek = data.series_per_week || null;
        this.pickBan = data.pick_ban || null;
        this.maps = Array.isArray(data.maps) ? data.maps.map(map => new Map(map)) : [];
    }

    toObject() {
        return {
            name: this.name,
            numberWeeks: this.numberWeeks,
            pickBan: this.pickBan,
            seriesPerWeek: this.seriesPerWeek
        };
    }

    toString() {
        const mapsStr = this.maps.length ? this.maps.join(', ') : 'None';
        return `Season(id=${this.id}, name=${this.name}, numberWeeks=${this.numberWeeks}, ` +
               `seriesPerWeek=${this.seriesPerWeek}, pickBan=${this.pickBan}, maps=${mapsStr})`;
    }
}