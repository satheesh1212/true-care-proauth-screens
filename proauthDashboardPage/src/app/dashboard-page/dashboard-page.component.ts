import { Component, OnInit } from '@angular/core';
import { InpatientService } from '../inpatient.service';
import { Members } from 'src/inpatientTableData';
import { MatTableDataSource } from '@angular/material/table';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})

export class DashboardSidebarComponent implements OnInit {

  ELEMENT_DATA: Members[] = [];
  dataSource = new MatTableDataSource<Members>(this.ELEMENT_DATA);

  constructor(private inpatientservice:InpatientService){ }

  ngOnInit() {
    this.inpatientservice.getInpatientServiceData().subscribe(inpatientData =>{
      console.warn(inpatientData)

      this.dataSource.data = inpatientData as Members[];

      //this.members = data //for normal one only
   },

   (err: HttpErrorResponse) => {
    console.log(err.message);
  })
   
  }

  displayedColumns: string[] = ['member_name','auth_num','determination_status','from_date','to_date','servicing_facility','diagnosis_code','state'];
}
