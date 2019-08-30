
import ConfigJson from '../../src/assets/app.config.json';

export class ConfigService {
    private externalBookers: any;

    constructor() {
        this.externalBookers = ConfigJson.externalBookers;
    }
}