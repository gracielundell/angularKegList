// model's class definition, put it in its own file so we can link it to all files so they all know what "Keg" means
export class Keg {
  public done: boolean = false;
  constructor(public description: string, public id: number) {

  }
}