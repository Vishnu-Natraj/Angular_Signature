// import { Component } from '@angular/core';
import SignaturePad from 'signature_pad';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public signaturePad!: SignaturePad;
  signatureImg: any;
  // imageUrl : any;
  base64Image: any;


  @ViewChild('canvas', { static: true })
  public canvas!: ElementRef;


  ngOnInit() {
    this.signaturePad = new SignaturePad(this.canvas.nativeElement);
  }

  startDrawing(event: Event) {
    debugger
    console.log(event);


  }

  moved(event: Event) {

  }

  clearPad() {
    this.signaturePad.clear();
  }

  DownloadPad() {
    let imageUrl =
      this.signatureImg;
    debugger
    console.log(imageUrl);

  }




  savePad() {
    const base64Data = this.signaturePad.toDataURL();
    console.log(base64Data)
    // window.open(this.signatureImg = base64Data);
    this.signatureImg = base64Data;


  }

}

