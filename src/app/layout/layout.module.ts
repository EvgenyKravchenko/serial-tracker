import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MdIconModule, MdToolbarModule, MdButtonModule } from "@angular/material";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MdIconModule.forRoot(),
    MdToolbarModule.forRoot(),
    MdButtonModule.forRoot()
  ],
  exports : [
    ToolbarComponent
  ],
  providers : []
})
export class LayoutModule { }
