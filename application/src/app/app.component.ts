import { Component, OnInit } from '@angular/core';
import Scroller from "./../assets/js/Scroller.js"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Out of the box!';
    
    public scroll:Scroller 
    public insideScroll:Scroller

    constructor(){
        this.scroll = new Scroller("app-root", 2, "input")
    }

    ngOnInit(): void {
        this.insideScroll = new Scroller("main > nav", 5, ".barcode")
    }
}
