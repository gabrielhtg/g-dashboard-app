import {AfterViewInit, Component, HostListener, ViewChild} from '@angular/core';
import {AngularCropperjsModule, CropperComponent} from "angular-cropperjs";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-ocr-bank-py',
  standalone: true,
  imports: [
    AngularCropperjsModule,
    FormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './ocr-bank-py.component.html',
})
export class OcrBankPyComponent implements AfterViewInit{
  ngAfterViewInit() {
  }

  constructor(
    private http: HttpClient
  ) {
  }
}
