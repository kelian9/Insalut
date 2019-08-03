import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {

  constructor() { }

  public certificates:string[] = [
    '../assets/certificate.jpg',
    '../assets/certificate.jpg',
    '../assets/certificate.jpg',
    '../assets/certificate.jpg',
    '../assets/certificate.jpg',
    '../assets/certificate.jpg',
    '../assets/certificate.jpg',
    '../assets/certificate.jpg',
    '../assets/certificate.jpg',
    '../assets/certificate.jpg'
  ];
  ngOnInit() {
  }

}
