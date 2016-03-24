import { Component } from 'angular2/core';
import { Keg } from './keg.model';

// grandchild of parent; child of child
@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  // toggles which list is shown, done or not done but both technically present
  template: `
  <div class="animateSelected">
  <input *ngIf="keg.done" type="checkbox" checked (click)="toggleDone(false)"/>
  <input *ngIf="!keg.done" type="checkbox" (click)="toggleDone(true)"/>
  <label>{{ keg.name }}</label>
</div>
  `
})
export class KegComponent {
  public keg: Keg;
  // sets state of bool to show which is toggled
  toggleDone(setState: boolean){
    this.keg.done = setState;
  }
}
