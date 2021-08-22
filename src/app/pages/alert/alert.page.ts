import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor( private alertCtrl: AlertController) { }

  ngOnInit() {
  }
  async presentAlert(){
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Hola',
      subHeader: 'Hola mundo',
      message: 'Este es un mensaje de alerta',
      buttons: ['OK']
    });

    
    await alert.present();
  }

  async presentAlertMultipleButtons(){
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Hola',
      subHeader: 'Hola mundo',
      message: 'Este es un mensaje de alerta',
      buttons: [
        {
          text:'ok',
          handler: () => {
            console.log('click en ok!')
          }
        },
        {
          text: 'Cancelar',
          role: 'Cancel'
        }
      ]
    });
    await alert.present();
  }
async presentAlertPrompt(){
  const alert = await this.alertCtrl.create({
    header: 'Prompt!',
    inputs:[
      {
        name: 'name 1',
        type: 'text',
        placeholder: 'Placeholder 1'
      },
      {
        name: 'name 2',
      type: 'text',
      id: 'name2-id',
      value: 'hello',
      placeholder: 'Placeholder 2'
    },
    //multiline imput.
    {
      name: 'Paragraph',
      id: 'Paragraph',
      type: 'textarea',
      placeholder: 'Placeholder 3'
    },
    {
      name:'name 3',
      value: 'http://ionicframework.com',
      type:'url',
      placeholder: 'Fvorite site ever'
    },
    //imput date whith min & max
    {
      name:'name4',
      type: 'date',
      min: '2015-03-01',
      max: '2025-01-12',
    },
    //imput date whithout min nor mar
    {
      name:'name5',
      type: 'date',
      min:' 2015-03-01',
      max: '2025-01-12',
    },
    {
      name: 'name6',
      type: 'number',
      min: -5,
      max: 10
    },
    {
      name: 'name7',
      type:'number',
    },
    {
      name:'name8',
      type:'password',
      placeholder: 'Advance Attributes',
      cssClass: 'specialiclass',
      attributes: {
        maxlength: 4,
        inputmode: 'decimal'
      }
    }
    ],
    buttons:[
      {

        text:'cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler:() => {
          console.log('confirm cancel')
        }
        },
        {
          text: 'ok',
          handler: (data:any) => {
            console.log(data)
        }
      }
    ]
  });

await alert.present();
}
}
