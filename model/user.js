class User {
    constructor(data = {}) {
        this.id = data.id || null;
        this.name = data.name || '';
        this.battleTag = data.battleTag || '';
        this.discordTag = data.discordTag || '';
        this.race = data.race || '';
        this.mmr = data.mmr || null;
        this.country = data.country || '';
        this.fantasyTier = data.fantasy_tier || null;
    }

    toObject() {
        return {
            name: this.name,
            battleTag: this.battleTag,
            discordTag: this.discordTag,
            race: this.race,
            mmr: this.mmr,
            country: this.country,
            fantasyTier: this.fantasyTier
        };
    }

    toString() {
        return `User(id=${this.id}, name=${this.name}, battleTag=${this.battleTag}, ` +
               `discordTag=${this.discordTag}, race=${this.race}, mmr=${this.mmr}, ` +
               `country=${this.country}, fantasyTier=${this.fantasyTier})`;
    }
}

export default User;