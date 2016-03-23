import {Pipe, PipeTransform} from 'angular2/core';
import {Keg} from './keg.model';

@Pipe({
  name: "done",
  pure: false
})
// DonePipe must be able to communicate and get info from PipeTransform interface (from angular)
export class DonePipe implements PipeTransform {
  transform(input: Keg[], args) {
    var desiredDoneState = args[0];
    // boolean if/else loop that filters kegs
    if(desiredDoneState === "done") {
      return input.filter((keg) => {
        return keg.done;
      });
    } else if (desiredDoneState === "notDone") {
      return input.filter((keg) => {
        return !keg.done;
      });
    } else {
      return input;
    }
  }
}
