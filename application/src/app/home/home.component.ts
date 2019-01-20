import { Component, OnInit, Input } from '@angular/core';
import Scroller from "../../assets/js/Scroller.js"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  @Input() scroll: Scroller 

  ngOnInit() {
  }

}
