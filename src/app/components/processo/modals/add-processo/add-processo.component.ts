import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Pessoa } from 'src/app/components/pessoa/interfaces/pessoa';
import { PessoaService } from 'src/app/components/pessoa/services/pessoa.service';
import { Processo } from '../../interfaces/processo';
import { ProcessoService } from '../../services/processo.service';

@Component({
  selector: 'app-add-processo',
  templateUrl: './add-processo.component.html',
  styleUrls: ['./add-processo.component.scss']
})
export class AddProcessoComponent implements OnInit {
  
  @Input() public processoForm: any

  public pessoaList!: Array<any>;
  
  constructor(private ngbActiveModal: NgbActiveModal, private pessoaService: PessoaService, private processoService: ProcessoService) {}

  async ngOnInit(){
    this.processoForm = this.processoForm ? this.processoForm : {
      id: null,
      numero: null,
      ano: null,
      dataCadastro: null,
      pessoa: null,
      descricao: null
    }
    this.getPessoaList()
  }

  getPessoaList(){
    this.pessoaService.getAll().subscribe((pessoaList)=>{this.pessoaList = pessoaList})
  }

  pessoaSelecionada(pessoa: Pessoa){
    this.processoForm.pessoa = pessoa
  }

  confirm(){
    this.processoService.save(this.processoForm).subscribe(()=>{
      this.ngbActiveModal.close()
    })
  }

  close(){
    this.ngbActiveModal.close()
  }

}
