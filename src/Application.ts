
// import {Zenox} from './Zenox';


export interface Application {

    isRunning(): boolean;

    start(): void;
    close(): void;

}

// export interface ApplicationConstructor {
//     new(zenox: Zenox): Application;
// }

/**
 *
 * TODO: Continuar desarrollo desde aqui
 *       Hay que añadir el Router, Route, Controller y View
 */
export abstract class BaseApplication implements Application {

    // protected zenox: Zenox;
    private running: boolean;

    // public constructor(zenox: Zenox) {
    public constructor() {
        // this.zenox = zenox;
        this.running = false;
        // this.onInit();
    }

    public isRunning(): boolean {
        return this.running;
    }

    // protected abstract run(): Promise<void>;
    protected abstract end(): Promise<number | void>;

    public start(): void {

        // this.run().then(() => {
        //     this.running = true;
        //     this.onStarted();
        //
        // }).catch(err => {
        //     this.onError(err);
        //     this.close();
        // });
    }

    public close(): void {

        // this.end().then(code => {
        //     this.running = false;
        //     this.onClose();
        //     process.exit(code || 0);
        //
        // }).catch(err => {
        //     this.onError(err);
        //     this.running = false;
        //     this.onClose();
        //     process.exit(1);
        // });
    }

    // protected onInit() {}
    //
    // protected onStarted(): void {
    //     log.info('Zenox', 'Zenox application started');
    // }
    //
    // protected onClose(): void {
    //     log.info('Zenox', 'Zenox application closed');
    // }
    //
    // protected onError(err: Error): void {
    //     log.error('Zenox', err.message);
    // }

}
