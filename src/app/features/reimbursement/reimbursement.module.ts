import { NgModule } from '@angular/core';
import { ReimbursementComponent } from './reimbursement.component';
import { ReimbursementRoutingModule } from './reimbursement-routing.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    ReimbursementComponent
  ],
  imports: [
    SharedModule,
    ReimbursementRoutingModule
  ],
  bootstrap: [
    ReimbursementComponent
  ]
})
export class ReimbursementModule { }
