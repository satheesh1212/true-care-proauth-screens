import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-request-table',
  templateUrl: './service-request-table.component.html',
  styleUrls: ['./service-request-table.component.css']
})
export class ServiceRequestTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['membername','authorizationno','determinationstatus','startdate','enddate','provider','state'];
  dataSource = SERVICE_REQUEST_TABLE_DATA;

}

export interface PeriodicRequestElementService {
  membername: string;
  authorizationno: string;
  determinationstatus: string;
  startdate: string;
  enddate: string;
  provider: string;
  state: string;
}

const SERVICE_REQUEST_TABLE_DATA: PeriodicRequestElementService[] = [
  {membername: 'Contreras, Naomi', authorizationno: 'IP0000001399', determinationstatus: 'Pending', startdate: '10/18/2018',enddate: '10/19/2018',provider: 'Brooks, Douglas',state:'Open'},
  {membername: 'Contreras, Naomi', authorizationno: 'IP0000001193', determinationstatus: 'Partially Approved', startdate: '09/17/2018',enddate: '09/19/2018',provider: 'Gooding, Lisa W',state:'Open'},
  {membername: 'Contreras, Naomi', authorizationno: 'IP0000001307', determinationstatus: 'Approved' , startdate: '09/18/2018',enddate: '09/19/2018',provider: 'Dallas Medical Center',state:'Open'},
  
];



// export class DashboardSidebarComponent implements OnInit {

//   ELEMENT_DATA: Members[] = [];
//   dataSource = new MatTableDataSource<Members>(this.ELEMENT_DATA);

//   constructor(private inpatientservice:InpatientService){ }

//   ngOnInit() {
//     this.inpatientservice.getInpatientServiceData().subscribe(inpatientData =>{
//       console.warn(inpatientData)

//       this.dataSource.data = inpatientData as Members[];

//       //this.members = data //for normal one
//    })
//   }

//   displayedColumns: string[] = ['member_name','auth_num','determination_status','from_date','to_date','servicing_facility','diagnosis_code','state'];
// }