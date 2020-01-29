import { Component, OnInit } from '@angular/core';
import { TcrmService } from 'src/app/shared/tcrm/service/tcrm.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tcrm: string ;

  constructor(
    private tcrmService: TcrmService
  ) { }

  ngOnInit() {

    this.consultarTcrm();
  }

  public consultarTcrm(){
    this.tcrmService.getConsumoTcrm().subscribe(
      response => {this.tcrm = response}
    )
  }


  
}
