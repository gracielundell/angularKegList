import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="new-keg-form">
    <h3>Create Keg:</h3>
    <input placeholder="Keg Description" class="col-sm-8 input-lg" #newName>
    <input placeholder="Keg Brand" class="col-sm-8 input-lg" #newBrand>
    <input placeholder="Pint Price" class="col-sm-8 input-lg" #newPrice>
    <input placeholder="Alcohol Content" class="col-sm-8 input-lg" #newAlcoholContent>
    <button (click)="addKeg(newName, newBrand, newPrice, newAlcoholContent)" class="btn-success btn-lg add-button">Add</button>
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
    addKeg(newName: HTMLInputElement, newBrand: HTMLInputElement, newPrice: HTMLInputElement, newAlcoholContent: HTMLInputElement) {
      var newKeg = new Keg(newName.value, newBrand.value, "$" + newPrice.value, newAlcoholContent.value + "%");
      this.onSubmitNewKeg.emit(newKeg);
      newName.value = "";
      newBrand.value = "";
      newPrice.value = "";
      newAlcoholContent.value = "";
    }
}
