export class ScrollHelper {
    static isOnScreenById(current: string, callback: Function): void {
        this.isOnScreen(document.getElementById(current), callback);
    }
    static isOnScreen(current: Element, callback: Function): void {
        var observer = new IntersectionObserver(function (entries) {
            if (callback) {
                callback(entries[0].isIntersecting);
            }
            observer.disconnect();
        }, { threshold: [0.75] });

        observer.observe(current);
    }
}