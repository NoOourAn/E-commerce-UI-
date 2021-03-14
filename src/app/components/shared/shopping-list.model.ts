//its descriptive what inside the file
//as how file should loook like

export class productDetails
{
         public id:number;
     public imagepath: string;
     public title: string;
     public subtitle: string;
     public dangerprice: string;
     public price: string;
    constructor(id:number, imagepath: string, title: string, subtitle: string, dangerprice: string, price: string )
        {
        this.id=id;
 this.imagepath=imagepath;
 this.title=title;
 this.subtitle=subtitle;
 this.dangerprice=dangerprice;
 this.price=price;
        }
}