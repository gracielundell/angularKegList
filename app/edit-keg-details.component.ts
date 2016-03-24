import {Component} from 'angular2/core';
import {Keg} from './keg.model';
import { NewKegComponent } from './new-keg.component';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
  <div class="edit-keg-form">
    <h3>Edit Description:</h3>
    <input [(ngModel)]="keg.name" class="keg-edit input-lg"/>
    <input [(ngModel)]="keg.brand" class="keg-edit input-lg"/>
    <input [(ngModel)]="keg.price" class="keg-edit input-lg"/>
    <input [(ngModel)]="keg.alcoholContent" class="keg-edit input-lg"/>

  </div>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
