

export type EnvironmentType = 'DEVELOPMENT' | 'PRODUCTION';

export let Environment = {
    DEVELOPMENT: <EnvironmentType> 'DEVELOPMENT',
    PRODUCTION: <EnvironmentType> 'PRODUCTION'
};

export interface ZenoxConfig {
    ENV?: EnvironmentType;
    MAINTENANCE?: boolean;
    CONFIG_PATH?: string;
}

export class Zenox {

    public constructor(config: ZenoxConfig = {}) {

    }

    /**
     * Run Zenox application
     */
    public run(): void {

        // if(this.application && this.application.running) {
        //     throw new ZenoxError('Zenox application is already running');
        // }

        // let ApplicationImpl = this.loader.loadComponent<ApplicationConstructor>('application');
        // this.application = new ApplicationImpl(this);
        // this.application.start();
    }

}
