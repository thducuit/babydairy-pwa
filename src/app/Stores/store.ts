import {BehaviorSubject} from 'rxjs';

export class Store<T> {

    // public observable
    public readonly state$;

    // private subject
    private readonly _state$: BehaviorSubject<T>;

    protected constructor(initialState: T) {
        this._state$ = new BehaviorSubject<T>(initialState);
        this.state$ = this._state$.asObservable();
    }

    get state(): T {
        return this._state$.getValue();
    }

    setState(nextState): void {
        this._state$.next(nextState);
    }
}
