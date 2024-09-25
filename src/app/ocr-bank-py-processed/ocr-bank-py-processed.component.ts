import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NgForOf} from "@angular/common";
import {formatWaktu} from "../env";

@Component({
  selector: 'app-ocr-bank-py-processed',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './ocr-bank-py-processed.component.html'
})
export class OcrBankPyProcessedComponent implements OnInit{
  receivedData: any
  receivedSubData:any

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.receivedData = navigation?.extras.state?.['data']; // Akses state data
    this.receivedSubData = navigation?.extras.state?.['sub-data']; // Akses state data
  }

  ngOnInit(): void {
    console.log(this.receivedData)
  }

  protected readonly formatWaktu = formatWaktu;
}
