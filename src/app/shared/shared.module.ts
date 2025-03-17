import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';
import { NotificationComponent } from './components/notification-card/notification-card.component';
import { StatusCardComponent } from './components/status-card/status-card.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        NotificationComponent,
        StatusCardComponent,
        UserCardComponent,
        DropdownMenuComponent,
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        CommonModule,
        NotificationComponent,
        StatusCardComponent,
        UserCardComponent,
        DropdownMenuComponent,
    ]

})
export class SharedModule { }
