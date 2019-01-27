import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import swal from 'sweetalert';
import { container } from '@angular/core/src/render3';
import { TextEditorComponent } from '../text-editor/text-editor.component';

@Component({
  selector: 'app-create-text',
  templateUrl: './create-text.component.html',
  styleUrls: ['./create-text.component.css']
})
export class CreateTextComponent implements OnInit {

  @ViewChild('editorContainer', { read: ViewContainerRef }) elem: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    console.log(this.elem)
  }
  
  startWriting(){
    this.elem.clear()
    const factory = this.resolver.resolveComponentFactory(TextEditorComponent)
    const refer = this.elem.createComponent(factory)
  }

}
