//Class make for model the money change

export class PriceModel {
  constructor(id: number,base: string, value: number){
      this.id = id;
      this.base = base;
      this.value = value;
  }
  id: number = 0;
  base: string ="";
  value: number =0;
}
