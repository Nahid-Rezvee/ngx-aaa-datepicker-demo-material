import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxAaaDatepickerModule } from 'ngx-aaa-datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { DatepickerDialogueComponent } from './datepicker-dialogue/datepicker-dialogue.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    DatepickerDialogueComponent
  ],
  entryComponents: [
    DatepickerDialogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxAaaDatepickerModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
