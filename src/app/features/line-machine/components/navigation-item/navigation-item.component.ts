import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MachineType } from '../../types';

@Component({
    selector: 'buhler-app-navigation-item',
    standalone: true,
    templateUrl: './navigation-item.component.html',
    styleUrl: './navigation-item.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationItemComponent {
    @Input()
    public machine!: MachineType;
}
