import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {NgForOf} from "@angular/common";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-ocr-bank-py-processed',
  standalone: true,
  imports: [
    NgForOf,
    ChartComponent
  ],
  templateUrl: './ocr-bank-py-processed.component.html'
})
export class OcrBankPyProcessedComponent implements OnInit, AfterViewInit {
  transactionData: any
  analiticsData:any
  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions> | undefined;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.transactionData = navigation?.extras.state?.['transaction-data'];
    this.analiticsData = navigation?.extras.state?.['analitics-data'];
  }

  ngAfterViewInit(): void {
    this.chartOptions = {
      series: [
        {
          name: "DEBIT",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        },
        {
          name: "CREDIT",
          data: [20, 61, 55, 71, 69, 82, 89, 111, 168]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Product Trends by Month",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ]
      }
    }
  }

  ngOnInit(): void {
  }
}
