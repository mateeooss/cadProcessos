import { Component, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { validaCpfCnpj } from './helper/valida-cpf';
import { Pessoa } from './interfaces/pessoa';
import { AddPessoaComponent } from './modals/add-pessoa/add-pessoa/add-pessoa.component';
import { PessoaService } from './services/pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  pessoaList!: Array<Pessoa>;
  search!: string;
  constructor(private pessoaService: PessoaService, private modalService: NgbModal) { 
    this.getPessoas()
  }

  ngOnInit(): void {
  }

  getPessoas(){
    this.pessoaService.getAll(this.search).subscribe((response)=>(this.pessoaList = response));
  }

  deletePessoa(pessoa: Pessoa){
    return Swal.fire({
      title: 'tem certeza?',
      text: "apagar essa pessoa, apagara seus processos tambem",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'sim, delete!'
    }).then((result) => {
      if (result.isConfirmed) {
          this.pessoaService.delete(pessoa.id).subscribe(()=>{
            this.getPessoas()
          })
      }
    })

      
  }

  verificarDelete(id:number){
    
  }

  async addPessoa(){
    const modalRef = await this.modalService.open(AddPessoaComponent).result.then(()=>{
      this.getPessoas()
    })
  }

  editPessoa(pessoa: Pessoa){
    
    const modalRef = this.modalService.open(AddPessoaComponent)
    modalRef.componentInstance.pessoaForm = pessoa;
    
    modalRef.result.then(()=>{
      this.getPessoas()
    })
  }
}
