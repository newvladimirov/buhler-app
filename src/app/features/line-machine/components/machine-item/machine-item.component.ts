import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MachineType } from '../../types';
import { NgClass, NgIf } from '@angular/common';
import { MachineStateWrapperComponent } from '@buhler/features/line-machine/components';

@Component({
    selector: 'buhler-app-machine-item',
    standalone: true,
    imports: [NgClass, NgIf, MachineStateWrapperComponent],
    templateUrl: './machine-item.component.html',
    styleUrl: './machine-item.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MachineItemComponent {
    @Input({ required: true })
    public machine!: MachineType;
}
