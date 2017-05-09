import { Component } from '@angular/core';
import { ModalController, NavParams, NavController  } from 'ionic-angular';
import { ViewController} from 'ionic-angular';



@Component({
    templateUrl: 'modal.html'
})

export class Modal {
    a1: number = Number(this.navParams.get('a1'));
    a2: number = Number(this.navParams.get('a2'));
    a3: number = Number(this.navParams.get('a3'));
    d1: number = Number(this.navParams.get('d1'));

    b1: number = Number(this.navParams.get('b1'));
    b2: number = Number(this.navParams.get('b2'));
    b3: number = Number(this.navParams.get('b3'));
    d2: number = Number(this.navParams.get('d2'));

    c1: number = Number(this.navParams.get('c1'));
    c2: number = Number(this.navParams.get('c2'));
    c3: number = Number(this.navParams.get('c3'));
    d3: number = Number(this.navParams.get('d3'));

    segundaOK: number = 0;
    segTercOk: number = 0;
    somar1e2: number = 0;
    somar1e3: number = 0;
    result: number = 0;
    aa: number;
    bb: number;
    cc: number;
    dd: number;
    x: number;
    y: number;
    z: number;
    multiplicador: number;
    det:number;

    // reTipo = /^[+-]?((\d+|\d{1,3}(\.\d{3})+)(\,\d*)?|\,\d+)$/;

    resultado: string;

    constructor(public navParams: NavParams, public viewCtrl: ViewController) {
        this.resolverSistema();
    }

    closeModal() {
        this.viewCtrl.dismiss();

    }

    resolverSistema() {

      this.det = ((this.a1 * this.b2 * this.c3) + (this.b1 * this.c2 * this.a3) + (this.c1 * this.a2 * this.b3)) -
                ((this.b1 * this.a2 * this.c3) + (this.a1 * this.c2 * this.b3) + (this.c1 * this.b2 * this.a3));
            if (this.det == 0) {
                this.resultado = "Determinante = 0.    O Sistema é impossível ou possui soluções infinitas!";
            }
            else {
                while (this.result == 0) {

                    if (this.a1 == this.a2 && this.a1 != 0 && this.a2 != 0) {
                        this.aa = this.a1 * (-1);
                        this.bb = this.b1 * (-1);
                        this.cc = this.c1 * (-1);
                        this.dd = this.d1 * (-1);
                        this.somar1e2 = 1;
                    }

                    else {
                        if (this.a1 != 0 && this.a2 != 0 && this.a1 != this.a2) {
                            this.multiplicador = -this.a2 / this.a1;

                            this.aa = this.a1 * this.multiplicador;
                            this.bb = this.b1 * this.multiplicador;
                            this.cc = this.c1 * this.multiplicador;
                            this.dd = this.d1 * this.multiplicador;
                            this.somar1e2 = 1;
                        }
                        else {
                            if (this.a1 != 0 && this.a2 == 0) {
                                this.somar1e3 = 1;
                            }
                            else {
                                if (this.a1 == 0 && this.a2 != 0) {
                                    this.somar1e3 = 1;
                                    this.aa = this.a1;
                                    this.bb = this.b1;
                                    this.cc = this.c1;
                                    this.dd = this.d1;

                                    this.a1 = this.a2;
                                    this.b1 = this.b2;
                                    this.c1 = this.c2;
                                    this.d1 = this.d2;

                                    this.a2 = this.aa;
                                    this.b2 = this.bb;
                                    this.c2 = this.cc;
                                    this.d2 = this.dd;
                                }
                                else {
                                    if (this.a1 == 0 && this.a2 == 0 && this.a3 != 0) {

                                        this.somar1e3 = 1;

                                        this.aa = this.a3;
                                        this.bb = this.b3;
                                        this.cc = this.c3;
                                        this.dd = this.d3;

                                        this.a3 = this.a1;
                                        this.b3 = this.b1;
                                        this.c3 = this.c1;
                                        this.d3 = this.d1;

                                        this.a1 = this.aa;
                                        this.b1 = this.bb;
                                        this.c1 = this.cc;
                                        this.d1 = this.dd;
                                    }
                                    else {
                                        if (this.a1 == 0 && this.a2 == 0 && this.a3 == 0) {
                                            this.resultado = "Variável X sem coefifientes!";
                                            this.result = 2;
                                        }
                                    }

                                }
                            }
                        }
                    }


                    if (this.somar1e2 == 1) {
                        this.a2 = this.aa + this.a2;
                        this.b2 = this.bb + this.b2;
                        this.c2 = this.cc + this.c2;
                        this.d2 = this.dd + this.d2;
                        this.somar1e2 = 0;
                    }

                    else {
                        if (this.somar1e3 == 1) {
                            this.multiplicador = -this.a3 / this.a1;

                            this.aa = this.a1 * this.multiplicador;
                            this.bb = this.b1 * this.multiplicador;
                            this.cc = this.c1 * this.multiplicador;
                            this.dd = this.d1 * this.multiplicador;


                            this.a3 = this.aa + this.a3;
                            this.b3 = this.bb + this.b3;
                            this.c3 = this.cc + this.c3;
                            this.d3 = this.dd + this.d3;
                            this.somar1e3 = 0;
                        }
                    }


                    if (this.a2 == 0 && this.a3 == 0) {

                        if (this.b2 == 0) {
                            this.bb = this.b2;
                            this.cc = this.c2;
                            this.dd = this.d2;

                            this.b2 = this.b3;
                            this.c2 = this.c3;
                            this.d2 = this.d3;

                            this.b3 = this.b2;
                            this.c3 = this.d2;
                            this.d3 = this.d2;

                            this.z = this.d3 / this.c3;
                            this.y = (this.d2 - (this.c2 * this.z)) / this.b2;
                            this.x = (this.d1 - (this.b1 * this.y) - (this.c1 * this.z)) / this.a1;
                            this.result = 1;
                        }
                        else {
                            if (this.b3 == 0) {
                                this.z = this.d3 / this.c3;
                                this.y = (this.d2 - (this.c2 * this.z)) / this.b2;
                                this.x = (this.d1 - (this.b1 * this.y) - (this.c1 * this.z)) / this.a1;
                                this.result = 1;
                            }
                            else {
                                if (this.b2 != 0 && this.b3 != 0) {
                                    this.y = ((this.d2 * this.c3) - (this.c2 * this.d3)) / ((this.b2 * this.c3) - (this.c2 * this.b3));
                                    this.z = ((this.b2 * this.d3) - (this.d2 * this.b3)) / ((this.b2 * this.c3) - (this.c2 * this.b3));
                                    this.x = (this.d1 - (this.b1 * this.y) - (this.c1 * this.z)) / this.a1;
                                    this.a3 = 0;
                                    this.b3 = 0;

                                    this.result = 1;
                                }
                            }
                        }
                    }

                    if (this.result == 1) {
                        this.resultado = "\nRESULTADO:  \nX = "  + this.x.toFixed(2)    + "   \nY = " + this.y.toFixed(2) + "\nZ = " + this.z.toFixed(2);
                    }
                    else if (this.result == 2) {
                        this.result = 1;
                    }

                }
            }


    }
}
