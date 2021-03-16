import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {HttpClient, HttpEventType } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

selectedFile: File= null;

  createproductform
  constructor(private myClient:HttpClient,private formBuilder: FormBuilder) {}
 
  addProduct(product){
    return this.myClient.post(`https://jsonplaceholder.typicode.com/posts/`,product);
  }
  onFileSelected(event)
  {
    console.log(event);
    this.selectedFile =<File>event.target.files[0];
  }

  ngOnInit(): void {
    
  }

  submit(){
    
  }
  onUpoad(){
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('', fd);
    reportProgress: true,
    observe: 'events'
  })
    .subscribe(event => {
      if (event.type === HttpEventType.UploadProgress){
        console.log('Upload Progress:' + Math.round(event.loaded / event.total * 100)   + '%')
      }
      else if 
      (event.type === HttpEventType.Response)
      {
console.log(event);
      }
      console.log(event);
    }
    });
  }
}
