import {
  AfterViewInit,
  Component,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AngularCropperjsModule, CropperComponent } from 'angular-cropperjs';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import HSFileUpload from '@preline/file-upload';
import { HSStaticMethods } from 'preline/preline';
import { apiUrlPy } from '../env';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ocr-bank-py',
  standalone: true,
  imports: [AngularCropperjsModule, FormsModule, NgForOf, NgIf],
  templateUrl: './ocr-bank-py.component.html',
})
export class OcrBankPyComponent implements AfterViewInit {
  element: HSFileUpload | any;

  constructor(private router: Router, private http: HttpClient) {}

  ngAfterViewInit() {
    HSFileUpload.autoInit();
    this.tampilkanPesanError();
  }

  tampilkanPesanError() {
    const { element }: any = HSFileUpload.getInstance(
      '#hs-file-upload-with-limited-file-size',
      true
    );
    this.element = element;

    this.element.dropzone.on('error', (file: any, response: any) => {
      if (file.size > this.element.concatOptions.maxFilesize * 1024 * 1024) {
        const successEls = document.querySelectorAll(
          '[data-hs-file-upload-file-success]'
        );
        const errorEls = document.querySelectorAll(
          '[data-hs-file-upload-file-error]'
        );

        successEls.forEach((el: any) => (el.style.display = 'none'));
        errorEls.forEach((el: any) => (el.style.display = ''));
        HSStaticMethods.autoInit(['tooltip']);
      }
    });
  }

  uploadFile() {
    Swal.fire({
      title: 'Processing',
      text: 'Sedang melakukan processing. Mohon tunggu ...',
      didOpen: () => {
        Swal.showLoading();
      },
    });

    this.element.dropzone.processQueue();

    this.element.dropzone.on('success', (file: any, response: any) => {
      Swal.close();

      this.router
        .navigate(['/dashboard/ocr-bank-py-processed'], {
          state: response,
        })
        .then();
    });

    this.element.dropzone.on('error', (file: any, errorMessage: any) => {
      // Menampilkan pesan error dengan SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Upload Failed',
        text: errorMessage.data, // Bisa disesuaikan dengan pesan yang lebih jelas
      });
    });
  }
}
