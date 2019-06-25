import { Component } from "@angular/core";
import { IonicPage, ViewController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-code-data",
  templateUrl: "code-data.html"
})
export class CodeDataPage {
  datos;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.datos = navParams.get("datos");
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
