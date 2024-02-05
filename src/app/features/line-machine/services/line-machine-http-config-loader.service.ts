import {inject} from '@angular/core';
import {map, Observable, tap} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LineMachineConfigLoader} from "@buhler/features/line-machine/interfaces/line-machine-config-loader.interface";
import {MachineLineConfig} from "@buhler/features/line-machine/types";

export class LineMachineHttpConfigLoader implements LineMachineConfigLoader {
    private readonly http = inject(HttpClient);

    constructor(private endpointUrl: string) {
    }

    public loadConfig(): Observable<MachineLineConfig> {
        return this.http.get(this.endpointUrl)
            .pipe(
                tap((result: unknown) => {
                    if (!this.isLineConfig(result)) {
                        throw new Error('Invalid machine line configuration. Please, contact support.')
                    }
                }),
                map((result) => result as MachineLineConfig)
            );
    }

    private isLineConfig(obj: any): obj is MachineLineConfig {
        return Array.isArray(obj?.['machines']);
    }
}
