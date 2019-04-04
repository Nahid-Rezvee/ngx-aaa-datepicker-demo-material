import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatepickerDialogueComponent } from './datepicker-dialogue/datepicker-dialogue.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  dates: any = [];
  dateString: string = ''

  constructor(public dialog: MatDialog, private datePipe: DatePipe) { }

  openDatepicker(): void {
    const dialogRef = this.dialog.open(DatepickerDialogueComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(data => {
      this.dateString = '';
      this.dates = [];
      if (data && data.hasDatePicked) {
        if (data.type === 'single' || data.type === 'multi') {
          this.dates = data.dates;
        }
        else {
          this.dates = data.dates.days;
        }
        this.dates.forEach((date) => {
          this.dateString = this.datePipe.transform(date, 'd MMM y') +', '+this.dateString;
        });
      }
    });
  };
}
