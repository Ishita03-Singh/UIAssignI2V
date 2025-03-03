import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';
import { NotificationCardComponent } from './components/notification-card/notification-card.component';
import { StatusCardComponent } from './components/status-card/status-card.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { SampleDirectiveDirective } from './directives/sample-directive.directive';
import { SamplePipePipe } from './pipes/sample-pipe.pipe';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        NotificationCardComponent,
        StatusCardComponent,
        UserCardComponent,
        DropdownMenuComponent,
        SampleDirectiveDirective,
        SamplePipePipe,
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        CommonModule,
        NotificationCardComponent,
        StatusCardComponent,
        UserCardComponent,
        DropdownMenuComponent,
        SampleDirectiveDirective,
        SamplePipePipe,
    ]

})
export class SharedModule { }
