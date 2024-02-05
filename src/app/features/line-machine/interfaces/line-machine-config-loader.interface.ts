import {Observable} from "rxjs";
import {MachineLineConfig} from "../types";

export abstract class LineMachineConfigLoader {
    abstract loadConfig(): Observable<MachineLineConfig>;
}
