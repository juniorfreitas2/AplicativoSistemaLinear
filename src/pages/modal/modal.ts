import { Component } from '@angular/core';
import { ModalController, NavParams, NavController  } from 'ionic-angular';
import { ViewController} from 'ionic-angular';



@Component({
    templateUrl: 'modal.html'
})

export class Modal {
    a: number = Number(this.navParams.get('x1'));
    b: number = Number(this.navParams.get('y1'));
    c: number = Number(this.navParams.get('resultado1'));
    d: number = Number(this.navParams.get('x2'));
    e: number = Number(this.navParams.get('y2'));
    f: number = Number(this.navParams.get('resultado2'));
    x:number = 0 ; y :number = 0;

    //variáveis auxiliares para escrever o  sistema na tela
    a1; b1; d1; e1;
    sinala:string; sinalb:string; sinald:string; sinale:string;
    ax:string="x"; by:string="y"; dx:string="x"; ey:string="y"; result: string; result2: string;

    constructor(public navParams: NavParams,public viewCtrl: ViewController) {
        this.resolverSistema();
    }

    closeModal() {
        this.viewCtrl.dismiss();
    }

    resolverSistema(){
        if(this.a==0 && this.b==0 && this.d==0 && this.e==0) {
            this.result = "Coloque valores diferentes de zero para as incognitas";
        }
        else{
                this.d1=this.d; this.a1= this.a;
                if( this.b >0 ){this.sinalb=" + ";this.b1=this.b} ;
                if( this.b <0 ){this.sinalb=" - ";this.b1=-this.b};
                if( this.e <0 ){this.sinale=" - ";this.e1=-this.e};
                if( this.e >0 ){this.sinale=" + ";this.e1=this.e} ;

                // se um coeficiente for zero este  nem  x e y não devem ser escritos//
                if( this.b == 0){this.sinalb=""; this.b1=""; this.by=""};
                if( this.a == 0){this.a1=""; this.ax=""; if( this.b >0 )this.sinalb="" };//um  if dentro de outro
                if( this.e == 0){this.sinale="";this.e1="";this.  ey=""} ;
                if( this.d == 0){this.d1="";this.dx="" ;if( this.e >0 )this.sinale=""};

                //se algum coeficiente for 1 ou -1//
                if( this.a == 1){ this.a1=""};
                if( this.a == -1){ this.a1="-";};
                if( this.b == 1){ this.b1=""};
                if( this.b == -1){ this.b1="-"}
                if( this.d == 1){ this.d1=""};
                if( this.d == -1){ this.d1="-";};
                if( this.e == 1){ this.e1=""};
                if( this.e == -1){ this.e1="-"}

                if((this.a * this.e - this.d * this.b)!=0 && this.a != 0) {

                    this.y = (this.f * this.a - this.d *this.c ) / (this.a * this.e - this.d * this.b);
                    this.x = (this.c - this.b * this.y) / this.a;

                    this.result2 = "Solução do sistema: X ="+this.x+" e Y =" +this.y;

                }
                else{
                    if((this.f * this.a - this.d * this.c) !=0 && (this.a * this.e -this.d *this.b)==0){
                        this.result = " Sistema sem solução ";
                    };
                    if((this.f * this.a - this.d * this.c ==0) && (this.a * this.e - this.d * this.b ==0)&&( this.a !=0 || this.b != 0) && ( this.d !=0 || this.e!=0)){
                        this.result = " Existem infinitas soluções para este sistema. Uma solução é: x = "+ this.c / this.a + " e y = 0" ;
                    }

                }
            }

        }

    }
