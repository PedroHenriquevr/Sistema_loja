import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToolbarComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
