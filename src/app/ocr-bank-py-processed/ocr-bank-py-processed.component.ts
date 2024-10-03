import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {NgForOf} from "@angular/common";
import {BaseChartDirective} from "ng2-charts";
import {ChartOptions, ChartData, ChartDataset, ChartConfiguration} from "chart.js";
import {getDateFrequency, getMonthlyChartDebitData, getMonthlyChartLabels} from "./ocr-bank-py-processed.service";


@Component({
  selector: 'app-ocr-bank-py-processed',
  standalone: true,
  imports: [
    NgForOf,
    BaseChartDirective,
  ],
  templateUrl: './ocr-bank-py-processed.component.html'
})
export class OcrBankPyProcessedComponent implements OnInit{
  transactionData: any
  analyticsData:any
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  lineChartOptions: ChartConfiguration<"bar" | "line", number[], string | number>["options"] = {
    responsive: true
  }

  // Data untuk debit kredit pertanggal yang ada pada bank statement
  barChartDebitKreditLabels: (string | number)[] | undefined;
  barChartDebitKreditData: ChartData<'bar', number[], string | number> | undefined

  // Data untuk perbandingan debit dengan kredit (bar chart)
  barTotalDebitKreditLabels: (string | number)[] | undefined;
  barTotalDebitKreditData: ChartData<'bar', number[], string | number> | undefined

  // Data untuk perbandingan banyaknya transaksi per tanggal yang ada pada bank statement
  dateTransactionData : any

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.transactionData = navigation?.extras.state?.['transaction-data'];
    this.analyticsData = navigation?.extras.state?.['analitics-data'];
  }

  ngOnInit(): void {
    this.barChartDebitKreditLabels = getMonthlyChartLabels(this.transactionData)
    this.barChartDebitKreditData = {
      labels: this.barChartDebitKreditLabels,
      datasets: getMonthlyChartDebitData(this.transactionData)
    };

    this.barTotalDebitKreditLabels = ['Total Debit Kredit']
    this.barTotalDebitKreditData = {
      labels : this.barTotalDebitKreditLabels,
      datasets : [
        {data: [parseFloat(this.analyticsData.sum_cr.replaceAll(',', ''))], label: 'Kredit'},
        {data: [parseFloat(this.analyticsData.sum_db.replaceAll(',', ''))], label: 'Debit'}
      ]
    }

    this.dateTransactionData = getDateFrequency(this.transactionData)
  }
}
