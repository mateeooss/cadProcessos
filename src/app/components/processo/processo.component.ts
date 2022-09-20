import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { Processo } from './interfaces/processo';
import { AddProcessoComponent } from './modals/add-processo/add-processo.component';
import { ProcessoService } from './services/processo.service';

@Component({
  selector: 'app-processo',
  templateUrl: './processo.component.html',
  styleUrls: ['./processo.component.css']
})
export class ProcessoComponent implements OnInit {
  search!: string;
  processoList!: Array<Processo>;
  constructor(private processoService: ProcessoService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getProcesso()
  }

  getProcesso(){
    this.processoService.getAll(this.search).subscribe((response)=>(this.processoList = response));
  }

  async addProcesso(){
    const modalRef = await this.modalService.open(AddProcessoComponent).result.then(()=>{
      this.getProcesso()
    })
  }

  deleteProcesso(processo: Processo){
    this.processoService.delete(processo.id).subscribe(()=>{
      this.getProcesso()
    })
  }

  editPessoa(pessoa: Processo){
    const modalRef = this.modalService.open(AddProcessoComponent)
    modalRef.componentInstance.processoForm = pessoa;
    modalRef.result.then(()=>{
      this.getProcesso()
    })
  }
}
