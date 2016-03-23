import {Component} from 'angular2/core';
import {Keg} from './keg.model';
import { NewKegComponent } from './new-keg.component';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
  <div class="keg-form">
    <h3>Edit Description:</h3>
    <input [(ngModel)]="keg.description" class="col-sm-8 input-lg keg-form"/>
  </div>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
