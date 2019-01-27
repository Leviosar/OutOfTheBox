import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EditorModule, EditorComponent } from '@tinymce/tinymce-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SearchComponent } from './search/search.component';
import { CreateTextComponent } from './create-text/create-text.component';
import { TextEditorComponent } from './text-editor/text-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    TopbarComponent,
    SearchComponent,
    CreateTextComponent,
    TextEditorComponent,
    EditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TextEditorComponent
  ],
  bootstrap: [AppComponent],
  entryComponents:[
    TextEditorComponent,
    AppComponent,
    EditorComponent
  ]
})
export class AppModule { }
