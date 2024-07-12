import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";
import {formatWaktu} from "../../env";

@Component({
  selector: 'app-table-log-activity',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './table-log-activity.component.html',
  styleUrl: './table-log-activity.component.css'
})
export class TableLogActivityComponent {
  @Input() data : any
  protected readonly formatWaktu = formatWaktu;
}
