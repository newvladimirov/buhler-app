import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
    selector: 'buhler-app-header',
    standalone: true,
    imports: [
        DatePipe
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
    @Input({required: true})
    public userName: string = '';

    @Input({required: true})
    public currentDate: Date = new Date();
}
