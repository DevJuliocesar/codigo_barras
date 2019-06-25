import { Component } from "@angular/core";
import { IonicPage, NavParams, ViewController } from "ionic-angular";
import { Http } from "@angular/http";
import { DatosP } from "../../interfaces/datosP.interface";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@IonicPage()
@Component({
  selector: "page-document-data",
  templateUrl: "document-data.html"
})
export class DocumentDataPage {
  public datos: DatosP;

  constructor(
    public viewCtrl: ViewController,
    params: NavParams,
    private http: Http
  ) {
    this.datos = params.get("datos");

    this.http
      .get("assets/lugar.json")
      .toPromise()
      .then(data => {
        let rs = data.json();
        let lugar = this.datos["Place"];

        if (rs[lugar]) {
          this.datos["Dpto"] = rs[lugar]["DPTO"];
          this.datos["Mpio"] = rs[lugar]["MPIO"];
        }
      });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
