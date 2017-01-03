import { BehaviorSubject, Observable } from 'rxjs';
/**
 * Created by Rex on 03/01/2017.
 */

export interface ISelectItem {
    id: number | string
}

export type Compare<T> = (a: T, b: T) => boolean;

export class Select<T extends ISelectItem> {
    private _behaviorSubject: BehaviorSubject<T> = new BehaviorSubject<T>(null);
    private _currentValue: T;
    private _previousValue: T;
    public currentValue: Observable<T> = this._behaviorSubject.asObservable();
    
    public get previousValue() {
        return this._previousValue;
    }
    
    constructor(private _items: T[], private _defaultSelectedIndex: number = 0) {
        this._previousValue = this._currentValue = _items[_defaultSelectedIndex];
        this._behaviorSubject = new BehaviorSubject<T>(this._currentValue);
    }
    
    select(item: T) {
        this._previousValue = this._currentValue;
        this._currentValue = item;
        this._behaviorSubject.next(item);
    }
    
    isSelected(item: T, compare?: Compare<T>): boolean {
        if (!compare) {
            return item.id === this._currentValue.id;
        }
        return compare(item, this._currentValue);
    }
    
}