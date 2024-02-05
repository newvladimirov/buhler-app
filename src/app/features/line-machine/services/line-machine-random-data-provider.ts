import {interval, map, Observable, startWith} from 'rxjs';
import {LineMachineDataProvider} from "@buhler/features/line-machine/interfaces/line-machine-data-provider.interface";

export class LineMachineRandomDataProvider implements LineMachineDataProvider {
    public start(): Observable<{ [type: number]: number }> {
        return interval(3000).pipe(
            startWith(() => this.generateStates()),
            map(() => this.generateStates()),
        );
    }

    private generateStates() {
        return new Array(10).fill(0).reduce((acc, _, index) => {
            acc[index] = this.randomIntFromInterval(1, 3);
            return acc;
        }, {});
    }

    private randomIntFromInterval(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
