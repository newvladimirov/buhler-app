import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './core/header/header.component';
import {Store} from "@ngrx/store";
import {selectAuthUserName} from "@buhler/store/auth/auth.selectors";
import {interval, map, startWith} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, AsyncPipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    private readonly store = inject(Store);
    public readonly authUserName$ = this.store.select(selectAuthUserName)
    public readonly currentDate$ = interval(1000).pipe(
        startWith(() => new Date()),
        map(() => new Date)
    );
}
