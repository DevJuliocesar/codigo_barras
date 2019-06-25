import { Component } from "@angular/core";
import { NavController, ModalController, IonicPage } from "ionic-angular";
import {
  BarcodeScanner,
  BarcodeScannerOptions
} from "@ionic-native/barcode-scanner";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner,
    public modalCtrl: ModalController
  ) {}

  show(datos) {
    let place = "";

    if ("PubDSK_1" === datos.substr(24, 8)) {
      place = datos.substr(160, 5);
    } else {
      place = datos.substr(161, 5);
    }

    let BirthDay = datos.substr(152, 8);

    let ModalDocument = this.modalCtrl.create("DocumentDataPage", {
      datos: {
        IdDocument: datos.substr(48, 10).replace(/\0/g, ""),
        Surename: datos.substr(58, 23).replace(/\0/g, ""),
        SecondSurename: datos.substr(81, 23).replace(/\0/g, ""),
        FirstName: datos.substr(104, 23).replace(/\0/g, ""),
        SecondName: datos.substr(127, 23).replace(/\0/g, ""),
        Gender: datos.substr(151, 1).replace(/\0/g, ""),
        BirthDay:
          BirthDay.substring(6, 8) +
          "/" +
          BirthDay.substring(4, 6) +
          "/" +
          BirthDay.substring(0, 4),
        BloodType: datos.substr(166, 3).replace(/\0/g, ""),
        CodeAfis: datos.substr(2, 9).replace(/\0/g, ""),
        DecadentCard: datos.substr(40, 8).replace(/\0/g, ""),
        Place: place
      }
    });
    ModalDocument.present();
  }

  showCode(datos) {
    let ModalCode = this.modalCtrl.create("CodeDataPage", {
      datos: datos
    });
    ModalCode.present();
  }

  scan() {
    var options: BarcodeScannerOptions = {
      showTorchButton: true, // iOS and Android
      formats: "CODE_39,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
      orientation: "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
      disableSuccessBeep: true, // iOS and Android
      resultDisplayDuration: 0
    };

    this.barcodeScanner
      .scan(options)
      .then(barcodeData => {
        console.log(barcodeData);
        if (barcodeData.format === "PDF_417") {
          this.show(barcodeData.text);
        } else if (barcodeData.format === "CODE_39") {
          this.showCode(barcodeData.text);
        }
      })
      .catch(err => {
        console.log("Error", err);
      });
  }
}
