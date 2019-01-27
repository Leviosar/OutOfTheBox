import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import Scroller from "./../assets/js/Scroller.js"
import { TextEditorComponent } from './text-editor/text-editor.component.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Out of the box!';
    
    public scroll:Scroller 
    public insideScroll:Scroller
    @ViewChild('editorContainer', { read: ViewContainerRef }) elem: ViewContainerRef;
    
    constructor(private resolver: ComponentFactoryResolver){
        this.scroll = new Scroller("app-root", 2, "input")
    }
    
    ngOnInit(): void {
        console.log(this.elem)
        this.insideScroll = new Scroller("main > nav", 5, ".barcode")
    }

    startWriting(){
        this.elem.clear()
        console.log(this.resolver)
        const factory = this.resolver.resolveComponentFactory(TextEditorComponent)
        const refer = this.elem.createComponent(factory)
    }

}
