import { Component, OnInit, Input } from '@angular/core';
import Scroller from "../../assets/js/Scroller.js"

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  private barColor:string = 'var(--pri-blue-color)'
  private iconShown:string = "fas fa-igloo"
  private bar:HTMLElement
  constructor() {}

  @Input() scroll: Scroller 

  move(index:number){
    switch(index){
      case 1:
        this.bar.style.transform = "translateX(0%)"
        this.bar.style.background = 'var(--pri-blue-color)'  
      break;
      case 2:
        this.bar.style.transform = "translateX(100%)"
        this.bar.style.background = 'var(--pri-oran-color)'
      break;
      case 3:
        this.bar.style.transform = "translateX(200%)"
        this.bar.style.background = 'var(--pri-blue-color)'
      break;
      case 4:
        this.bar.style.transform = "translateX(300%)"
        this.bar.style.background = 'var(--pri-oran-color)'
      break;
    }
    this.scroll.slide(index)
  }

  ngOnInit() {
    this.bar = document.querySelector("div.selector")
  }

}
