import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { PessoaComponent } from './components/pessoa/pessoa.component';
import { AddPessoaComponent } from './components/pessoa/modals/add-pessoa/add-pessoa/add-pessoa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ProcessoComponent } from './components/processo/processo.component';
import { HomeComponent } from './components/home/home.component';
import { AddProcessoComponent } from './components/processo/modals/add-processo/add-processo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PessoaComponent,
    AddPessoaComponent,
    AddProcessoComponent,
    ProcessoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
