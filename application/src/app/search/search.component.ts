import { Component, OnInit, Input } from '@angular/core';
import Scroller from "../../assets/js/Scroller.js"


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  @Input() scroll: Scroller 

  ngOnInit() {
    this.setupAnimations(document.querySelector('div.wait'))
  }

  setupAnimations(el){
    let i = 0
    let interval = setInterval(()=>{
      if (el.children[i]) {
        el.children[i].style.animation = 'grow 1s infinite'
        i++
      }else{
        clearInterval(interval)
      }
    }, 200)  
  }

}
