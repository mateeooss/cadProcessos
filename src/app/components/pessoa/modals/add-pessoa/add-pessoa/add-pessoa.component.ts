import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { validaCpfCnpj } from '../../../helper/valida-cpf';
import { Pessoa } from '../../../interfaces/pessoa';
import { PessoaService } from '../../../services/pessoa.service';

@Component({
  selector: 'app-add-pessoa',
  templateUrl: './add-pessoa.component.html',
  styleUrls: ['./add-pessoa.component.scss']
})
export class AddPessoaComponent implements OnInit{
  @Input() pessoaForm:  any

  constructor(private ngbActiveModal: NgbActiveModal, private pessoaService: PessoaService) { 
    
  }

  ngOnInit(): void {
    this.pessoaForm = this.pessoaForm ? this.pessoaForm :  {
      id: null,
      nome: null,
      cpf: null,
      dataNascimento: null,
      dataCadastro: new Date()
    }

    if(this.pessoaForm.cpf)this.formatarCpf() 
  }

  submit(){

  }

  close(){
    this.ngbActiveModal.close()
  }

  confirm(){
    if(this.verificarCampos()){
      this.finalizarPessoaForm()
      this.pessoaService.save(this.pessoaForm).subscribe(()=>{
        this.ngbActiveModal.close(this.pessoaForm)
      })
      
    }
  }

  verificarCampos(){
    return this.validarCpf() && this.validarDataNascimento()
  }

  validarDataNascimento(){
    let dataNascimento = new Date(this.pessoaForm.dataNascimento).toLocaleDateString()
    
    if(dataNascimento >= new Date().toLocaleDateString()){
      Swal.fire('data de nascimento superior a data atual')
      return false
    }
    return true
  }

  validarCpf(){
    if(!validaCpfCnpj(this.pessoaForm.cpf)){
      Swal.fire('cpf incorreto')
      return false
    }
    return true
  }

  formatarCpf() {
    this.pessoaForm.cpf = this.mascaraCpf(this.pessoaForm.cpf)
  }

  retirarFormatacao() {
    this.pessoaForm.cpf = this.pessoaForm.cpf.replace(/(\.|\/|\-)/g,"");
  }
  
  mascaraCpf(cpf: any) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4");
  }

  finalizarPessoaForm(){
    this.retirarFormatacao()
  }


}
