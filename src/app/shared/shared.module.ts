import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { JoinPipe } from './pipes/join.pipe';


@NgModule({
  declarations: [
    NavigationComponent,
    JoinPipe
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule
  ],
  exports: [
    NavigationComponent,
    JoinPipe
  ]
})
export class SharedModule { }
