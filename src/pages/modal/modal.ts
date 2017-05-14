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

    somar1e2: number = 0;
    somar1e3: number = 0;
    result: number = 0;
    aa: number = 0;
    bb: number = 0;
    cc: number = 0;
    dd: number = 0;
    x: number = 0;
    y: number = 0;
    z: number = 0;
    multiplicador: number = 0;
    det:number = 0;

    // array:Array<number> = [
    //     this.a1,
    //     this.a2,
    //     this.a3,
    //     this.d1,
    //     this.b1,
    //     this.b2,
    //     this.b3,
    //     this.d2,
    //     this.c1,
    //     this.c2,
    //     this.c3,
    //     this.d3
    // ];
    coef_10:number; coef_20:number; coef_21:number;
    i:number;j:number;
    // reTipo = /^[+-]?((\d+|\d{1,3}(\.\d{3})+)(\,\d*)?|\,\d+)$/;

    resultado: string;

    constructor(public navParams: NavParams, public viewCtrl: ViewController) {
        this.novoMetodo();
    }

    closeModal() {
        this.viewCtrl.dismiss();

    }

    novoMetodo(){

        this.coef_10 = -1.0 * this.b1 / this.a1;
        this.coef_20 = -1.0 * this.c1 / this.a1;
        //start primeiro for
        this.b1 += this.coef_10 * this.a1;
        this.c1 += this.coef_20 * this.a1;

        this.b2 += this.coef_10 * this.a2;
        this.c2 += this.coef_20 * this.a2;

        this.b3 += this.coef_10 * this.a3;
        this.c3 += this.coef_20 * this.a3;

        this.d2 += this.coef_10 * this.d1;
        this.d3 += this.coef_20 * this.d1;
        //end primeiro for

        //start segundo for
        this.coef_21 = -1.0 * this.c2 / this.b2;
        this.c2 += this.coef_21 * this.b2;

        this.c3 += this.coef_21 * this.b3;

        this.d3 += this.coef_21 * this.d2;
        //end segundo for

        this.x = (this.d3) / this.c3;
        this.y = (this.d2 - (this.x * this.b3)) / this.b2;
        this.z = (this.d1 - (this.x * this.a3) - (this.y * this.a2)) / this.a1;

        this.resultado = "\nRESULTADO:\nX = " + this.x + "\nY = " + this.y + "\nZ = " + this.z;
    }
    resolverSistema() {
        //calculando a determinante da matriz do sistema linear, para verificar se o sistema é SPD, SPI ou SI
        this.det=((this.a1*this.b2*this.c3)+(this.b1*this.c2*this.a3)+(this.c1*this.a2*this.b3))-((this.b1*this.a2*this.c3)+(this.a1*this.c2*this.b3)+(this.c1*this.b2*this.a3));
        if (this.det == 0) {
            this.resultado="Determinante = 0 <br> O Sistema é impossível ou possui soluções infinitas!";
        }
        else
        {
            //por se tratar de um algoritmo iterativo, a repetição só é quebrada quando o restultado final é encontrado
            while (this.result == 0)
            {

                //multiplica a primeira linha por -1 e sinaliza que deve somar a primeira com a segunda
                if (this.a1 == this.a2 && this.a1 != 0 && this.a2 != 0)
                {
                    this.aa = this.a1 * (-1);
                    this.bb = this.b1 * (-1);
                    this.cc = this.c1 * (-1);
                    this.dd = this.d1 * (-1);
                    this.somar1e2 = 1;
                }

                else
                {
                    //verifica um this.multiplicador para poder eliminar a segunda linha, sinaliza que deve somar a primeira com a segunda
                    if (this.a1 != 0 && this.a2 != 0 && this.a1 != this.a2)
                    {
                        this.multiplicador = -this.a2 / this.a1;

                        this.aa = this.a1 * this.multiplicador;
                        this.bb = this.b1 * this.multiplicador;
                        this.cc = this.c1 * this.multiplicador;
                        this.dd = this.d1 * this.multiplicador;
                        this.somar1e2 = 1;
                    }
                    else
                    {
                        //verifica se a segunda linha já está escalonada, sinaliza que deve seguir para a terceira
                        if (this.a1 != 0 && this.a2 == 0)
                        {
                            this.somar1e3 = 1;
                        }
                        else
                        {
                            //inverte a primeira e segunda linhas, caso a primeira já esteja escalonada
                            //sinaliza que deve partir para a terceira linha
                            if (this.a1 == 0 && this.a2 != 0)
                            {
                                this.somar1e3 = 1;
                                this.aa=this.a1;
                                this.bb=this.b1;
                                this.cc=this.c1;
                                this.dd=this.d1;

                                this.a1 = this.a2;
                                this.b1 = this.b2;
                                this.c1 = this.c2;
                                this.d1 = this.d2;

                                this.a2 = this.aa;
                                this.b2 = this.bb;
                                this.c2 = this.cc;
                                this.d2 = this.dd;
                            }
                            else
                            {
                                //inverte a primeira e terceira linhas, caso as duas primeiras já estejam escalonadas
                                //sinaliza que deve partir para a terceira linha
                                if( this.a1 == 0 && this.a2 == 0 && this.a3 != 0)
                                {

                                    this.somar1e3 = 1;

                                    this.aa = this.a3;
                                    this.bb = this.b3;
                                    this.cc = this.c3;
                                    this.dd = this.d3;

                                    this.a3 = this.a1;
                                    this.b3 = this.b1;
                                    this.c3 = this.c1;
                                    this.d3 = this.d1;

                                    this.a1=this.aa;
                                    this.b1=this.bb;
                                    this.c1=this.cc;
                                    this.d1=this.dd;
                                }
                            }
                        }
                    }
                }


                //soma a primeira linha (já modificada) com a segunda e sinaliza que não precisa mais realizar essa operação
                if (this.somar1e2 == 1 )
                {
                    this.a2 = this.aa + this.a2;
                    this.b2 = this.bb + this.b2;
                    this.c2 = this.cc + this.c2;
                    this.d2 = this.dd + this.d2;
                    this.somar1e2=0;
                }

                else
                {
                    //identifica um mutiplicador para poder eliminar o elemento x da terceira linha e modifica a mesma
                    if (this.somar1e3 == 1)
                    {
                        this.multiplicador = -this.a3 / this.a1;

                        this.aa = this.a1 * this.multiplicador;
                        this.bb = this.b1 * this.multiplicador;
                        this.cc = this.c1 * this.multiplicador;
                        this.dd = this.d1 * this.multiplicador;


                        this.a3 = this.aa + this.a3;
                        this.b3 = this.bb + this.b3;
                        this.c3 = this.cc + this.c3;
                        this.d3 = this.dd + this.d3;
                        this.somar1e3=0;
                    }
                }


                //verifica se as linhas 2 e 3 já estão escalonadas
                if (this.a2 == 0 && this.a3 == 0 )
                {
                    //verifica se a segunda linha já contém o this.resultado para Z
                    //inverte a segunda linha com a terceira
                    if (this.b2 == 0)
                    {
                        this.bb = this.b2;
                        this.cc = this.c2;
                        this.dd = this.d2;

                        this.b2 = this.b3;
                        this.c2 = this.c3;
                        this.d2 = this.d3;

                        this.b3 = this.bb;
                        this.c3 = this.cc;
                        this.d3 = this.dd;

                        //encontra o this.resultado: valores de X, Y e Z, sinaliza que deve exibí-lo
                        this.z = this.d3 / this.c3;
                        this.y = (this.d2 - (this.c2 * this.z)) / this.b2;
                        this.x = (this.d1 - (this.b1 * this.y) - (this.c1 * this.z)) / this.a1;
                        this.result = 1;
                    }
                    else
                    {
                        //verifica se o valor de Z já está na terceira linha
                        if (this.b3==0)
                        {
                            //encontra o this.resultado: valores de X, Y e Z, sinaliza que deve exibí-lo
                            this.z = this.d3 / this.c3;
                            this.y = (this.d2 - (this.c2 * this.z)) / this.b2;
                            this.x = (this.d1 - (this.b1 * this.y) - (this.c1 * this.z)) / this.a1;
                            this.result = 1;
                        }
                        else
                        {
                            //verifica se as linhas 2 e 3 estão formando um sistema de 2 equações
                            if (this.b2 != 0 && this.b3 != 0)
                            {
                                //resolve o sistema
                                //encontra o this.resultado: valores de X, Y e Z, sinaliza que deve exibí-lo
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

                //exibe o this.resultado encontrado
                if (this.result == 1)
                {
                    this.resultado = "\nRESULTADO:\nX = " + this.x + "\nY = " + this.y + "\nZ = " + this.z;
                }
            }
        }


    }
}
