export declare abstract class Process {
    static interrupted: [() => boolean | null, (value: boolean | null) => void];
    private fps;
    private pc;
    constructor();
    protected throttle(fps: number, onUpdate: () => void): void;
    protected onUpdate?(delta: number, fps: number): void;
    protected onLoad?(): void;
}
