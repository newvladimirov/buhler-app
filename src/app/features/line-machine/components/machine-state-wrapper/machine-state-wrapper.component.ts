import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { RunningStates } from '@buhler/features/line-machine/running-states';

@Component({
    selector: 'buhler-app-machine-state-wrapper',
    standalone: true,
    imports: [],
    templateUrl: './machine-state-wrapper.component.html',
    styleUrl: './machine-state-wrapper.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MachineStateWrapperComponent {
    @Input()
    public state: RunningStates = RunningStates.Unknown;
    @HostBinding('class')
    get class() {
        return `state-${this.stateName.toLowerCase()}`;
    }
    get stateName() {
        return RunningStates[this.state] || 'Unknown';
    }
}
