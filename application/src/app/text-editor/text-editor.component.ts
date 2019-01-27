import { Component, OnInit, Input } from '@angular/core';
import { EditorModule } from '@tinymce/tinymce-angular';
import Scroller from "../../assets/js/Scroller.js"
import Quill from "quill/dist/quill";

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {

  @Input() scroll: Scroller 
  
  constructor() { }

  ngOnInit() {
    const placeholders = ['Show me what you got', 'The first draft is just you telling yourself the story', 'You can always edit a bad page. You can’t edit a blank page', 'There is no greater agony than bearing an untold story inside you.', 'I think all writing is a disease. You can’t stop it', 'A professional writer is an amateur who didn’t quit.']

    const toolbarOptions = [
      {size: ['small', 'normal', 'large', 'huge']}, 'bold', 'italic', 'strike', {color: []}, 'link', 'image', 'video'
    ]

    let random = Math.floor(Math.random() * placeholders.length)
    console.log(random)
    const quill = new Quill("#quill-editor", {
      modules: {
        'toolbar':  toolbarOptions, 
        'history': {
          'delay': 2500,
          'userOnly': true
        },
      },
      theme: 'snow',
      placeholder: placeholders[random]
    })
    
    quill.on('text-change', (delta, oldDelta, source)=>{console.log(oldDelta)})
  }

}
