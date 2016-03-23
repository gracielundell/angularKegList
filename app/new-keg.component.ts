import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
    <h3>Create Keg:</h3>
    <input placeholder="Keg Description" class="col-sm-8 input-lg" #newDescription>
    <input placeholder="Keg Brand" class="col-sm-8 input-lg" #newBrand>
    <input placeholder="Pint Price" class="col-sm-8 input-lg" #newPint>
    <input placeholder="Alcohol Content" class="col-sm-8 input-lg" #newAlcoholContent>
    <button (click)="addKeg(newDescription)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<Keg>;
    constructor(){
      // create and emit new eventEmitter to be sent out into the world
      this.onSubmitNewKeg = new EventEmitter();
    }
    // takes in user input, which is seen as an html element
    addKeg(userDescription: HTMLInputElement) {
      var newKeg = new Keg(userDescription.value, 0);
      this.onSubmitNewKeg.emit(newKeg);
      userDescription.value = "";
    }
}
