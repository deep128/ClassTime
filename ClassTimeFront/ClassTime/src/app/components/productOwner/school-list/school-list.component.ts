import { Component, OnInit } from '@angular/core';
import { School } from 'src/app/common/Interfaces/school.interface';
import { SchoolService } from './school.service';
import { UtilService } from 'src/app/common/services/util.service';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.less'],
  providers: [SchoolService]
})
export class SchoolListComponent implements OnInit {

  public schools: School[] = [];
  displayedColumns: string[] = ['name', 'isActive'];
  
  constructor(private schoolService: SchoolService,private util: UtilService) {
    schoolService.getSchools(0, 10, (err, schools)=>{
      if(err) {
        this.util.openSnackBar(err.error,err.statusText);
        return;
      }
      this.schools = schools;
    });
   }

  ngOnInit() {
  }

}
