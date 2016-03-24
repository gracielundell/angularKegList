// model's class definition, put it in its own file so we can link it to all files so they all know what "Keg" means
export class Keg {
  public done: boolean = false;
  public pintsLeft: number = 124;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number) {

  }
}
