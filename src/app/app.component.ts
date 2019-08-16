import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  pageTitle="component interaction...";
  name : string;
  userName : string;
  private _custNameChange : string;
  
  @ViewChild("nameRef",{static:true,}) nameElementRef : ElementRef;

  ngAfterViewInit(): void {
    this.nameElementRef.nativeElement.focus();
  }

  changeModel(userNameIs)
  {
    this.userName=userNameIs;
    if(userNameIs=="atul")
    {
      console.log("welcome atul...");
    }
  }

  get custNameChange(): string
  {
    console.log("getter ...");
    return this._custNameChange;
  }

  set custNameChange(value : string)
  {
    console.log("setter ...");
    this._custNameChange=value;
    if(value=="atul")
    {
      console.log("hellow  : "+value);
    }
  }

}
