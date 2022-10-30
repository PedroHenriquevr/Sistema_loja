import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';



import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    ToolbarModule,
    ButtonModule,
    FieldsetModule
  ],
  exports: [
    ToolbarComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
