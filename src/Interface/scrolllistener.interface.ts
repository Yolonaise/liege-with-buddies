export interface IScrollListener {
    isOnScreen: boolean;
    onscrollevent(event: any): void;
}