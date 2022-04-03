export class Alert {
    id: string | undefined;
    type: AlertType = 0;
    message: string | undefined;
    autoClose: boolean = false;
    keepAfterRouteChange: boolean = false;
    fade: boolean = false;

    constructor(init?:Partial<Alert>) {
        Object.assign(this, init);
    }
}

export enum AlertType {
    Success,
    Error,
    Info,
    Warning
}