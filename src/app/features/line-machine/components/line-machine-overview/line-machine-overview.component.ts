import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MachineItemComponent } from '../machine-item/machine-item.component';
import { MachineStateWrapperComponent } from '@buhler/features/line-machine/components';
import { NgForOf } from '@angular/common';
import { MachineType } from '@buhler/features/line-machine/types';
import { RunningStates } from '@buhler/features/line-machine/running-states';

@Component({
    selector: 'buhler-app-line-machine-overview',
    standalone: true,
    imports: [MachineItemComponent, MachineStateWrapperComponent, NgForOf],
    templateUrl: './line-machine-overview.component.html',
    styleUrl: './line-machine-overview.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LineMachineOverviewComponent {
    @Input({ required: true })
    public machines: MachineType[] = [];

    @Input({ required: true })
    public lineState: { [typeId: number]: RunningStates } = {};
}
