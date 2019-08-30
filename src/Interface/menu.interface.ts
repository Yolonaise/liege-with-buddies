export interface IMenu {
    htmlId: string;
    name: string;
    loaded: boolean;

    onscrollevent(event: any): void;
}