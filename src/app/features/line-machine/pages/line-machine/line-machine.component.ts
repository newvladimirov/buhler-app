import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import {
    MachineItemComponent,
    MachineStateWrapperComponent,
    NavigationItemComponent,
} from '@buhler/features/line-machine/components';
import {
    initMachineLine,
    selectError,
    selectLineMachineConfig,
    selectLineMachineState,
    startMonitoring,
} from '@buhler/store';
import { RouterOutlet } from '@angular/router';
import { LineMachineOverviewComponent } from '@buhler/features/line-machine/components/line-machine-overview/line-machine-overview.component';
import { LineMachineNavigationComponent } from '@buhler/features/line-machine/components/line-machine-navigation/line-machine-navigation.component';
import { ErrorDescriptionComponent } from '@buhler/features/line-machine/components/error-description/error-description.component';

@Component({
    selector: 'buhler-app-line-machine',
    standalone: true,
    templateUrl: './line-machine.component.html',
    styleUrl: './line-machine.component.scss',
    imports: [
        MachineItemComponent,
        AsyncPipe,
        NgFor,
        NavigationItemComponent,
        MachineStateWrapperComponent,
        NgIf,
        RouterOutlet,
        LineMachineOverviewComponent,
        LineMachineNavigationComponent,
        ErrorDescriptionComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LineMachineComponent {
    private readonly store = inject(Store);

    public readonly config$ = this.store.select(selectLineMachineConfig);
    public readonly lineState$ = this.store.select(selectLineMachineState);
    public readonly error$ = this.store.select(selectError);

    constructor() {
        this.store.dispatch(initMachineLine());
        this.store.dispatch(startMonitoring());
    }
}
