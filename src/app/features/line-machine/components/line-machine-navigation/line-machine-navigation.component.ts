import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MachineStateWrapperComponent, NavigationItemComponent} from "@buhler/features/line-machine/components";
import {NgForOf} from "@angular/common";
import {MachineType} from "@buhler/features/line-machine/types";
import {RunningStates} from "@buhler/features/line-machine/running-states";

@Component({
  selector: 'buhler-app-line-machine-navigation',
  standalone: true,
    imports: [
        MachineStateWrapperComponent,
        NavigationItemComponent,
        NgForOf
    ],
  templateUrl: './line-machine-navigation.component.html',
  styleUrl: './line-machine-navigation.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LineMachineNavigationComponent {
    @Input({required: true})
    public machines: MachineType[] = [];

    @Input({required: true})
    public lineState: { [typeId: number]: RunningStates } = {};
}
