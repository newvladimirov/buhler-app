import {Observable} from "rxjs";

export abstract class LineMachineDataProvider {
    abstract start(): Observable<{ [type: number]: number }>;
}
