export class Orders
{ 
    public id:number;
    public num:number;
    public imagepath: string;
    public title: string;
    public price: string;

   constructor(id:number,num:number, imagepath: string, title: string,  price: string )
       {
       this.id=id;
       this.imagepath=imagepath;
       this.title=title;
       this.price=price;
       this.num=num;
       }

}
