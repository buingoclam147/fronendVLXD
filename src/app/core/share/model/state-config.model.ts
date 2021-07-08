export class StateConfig {
    title: string;
    cancelText: string;
    okText: string;
    constructor(title: string, canelText: string, okText: string) {
        this.title = title;
        this.cancelText = canelText;
        this.okText = okText;
    }
}
