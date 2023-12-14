export type State<T> = [() => T, (value: T) => void];
declare class GameState<T extends Object> {
    constructor(props?: T);
    props: T;
    useState<T>(defaultValue?: T): State<T>;
}
export { GameState };
