import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppModule } from './app.module'
import { HomeComponent } from './components/home/home.component'
import { PessoaComponent } from './components/pessoa/pessoa.component'
import { ProcessoComponent } from './components/processo/processo.component'

const routes: Routes = [
    {path:'pessoa', component: PessoaComponent},
    {path:'processo', component: ProcessoComponent},
    {path:'',  component: HomeComponent}
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}