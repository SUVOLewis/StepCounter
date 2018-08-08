import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Stepcounter } from '@ionic-native/stepcounter';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  stepWorks: string = 'Untested';
  currentSteps: string = '0';
  currentStepsNUM: number = 0;

  constructor(public navCtrl: NavController, private stepcounter: Stepcounter) {

    // let startingOffset = 0;
    // this.stepcounter.start(startingOffset).then(onSuccess => console.log('stepcounter-start success', onSuccess), onFailure => console.log('stepcounter-start error', onFailure));

    this.stepcounter.getHistory().then(historyObj => console.log('stepcounter-history success', historyObj), onFailure => console.log('stepcounter-history error', onFailure));
  }

  

  workingCheck() {
    let startingOffset = 0;
    this.stepcounter.deviceCanCountSteps().then(onSuccess => console.log('device can!', onSuccess), onFailure => console.log('No it cant!!' , onFailure));
    this.stepcounter.start(startingOffset).then(onSuccess => this.stepWorks = 'Yes it does!' , onFailure => this.stepWorks = 'No it doesnt!');
  }

  getSteps() {
    debugger;

    var p:Promise<any|number> = this.stepcounter.getStepCount();

    p.then((noOfSteps) => {
      debugger;

      this.currentStepsNUM = noOfSteps;

      this.currentSteps = this.currentStepsNUM.toString();
    });
  }

}
