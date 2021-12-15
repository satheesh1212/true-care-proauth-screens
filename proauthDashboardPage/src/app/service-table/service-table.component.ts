import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Providers } from 'src/service-providers-table';
import { ProcedureAuthService } from '../servive-providers.service';

@Component({
  selector: 'app-service-table',
  templateUrl: './service-table.component.html',
  styleUrls: ['./service-table.component.css']
})


export class ServiceTableComponent implements OnInit {

  ELEMENT_DATA: Providers[] = [];
  dataSource = new MatTableDataSource<Providers>(this.ELEMENT_DATA);

  constructor(private procedureservice:ProcedureAuthService){ }

  ngOnInit() {
    this.procedureservice.getProcedureServiceAuthData().subscribe(procedureServiceData =>{
      console.warn(procedureServiceData)

      this.dataSource.data = procedureServiceData as Providers[];
   },
   
   (err: HttpErrorResponse) => {
    console.log(err.message);
  })
  }

  displayedColumns: string[] = ['member_name','auth_num','determination_status','from_date','to_date','state'];
}



