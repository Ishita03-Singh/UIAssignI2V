import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { QuickAddComponent } from './layout/quick-add/quick-add.component';
import { DrawerComponent } from './layout/drawer/drawer.component';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { ContactPageComponent } from './layout/contact-page/contact-page.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ReimbursementModule } from './features/reimbursement/reimbursement.module';
import { NotificationsModule } from './features/notifications/notifications.module';

@NgModule({
  declarations: [
    AppComponent,
    DrawerComponent,
    HeaderComponent,
    QuickAddComponent,
    LayoutComponent,
    ContactPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    DashboardModule,
    ReimbursementModule,
    NotificationsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
