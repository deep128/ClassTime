import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { AddSchoolService } from './add-school.service';
import { UtilService } from 'src/app/common/services/util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.less'],
  providers: [AddSchoolService]
})
export class AddSchoolComponent implements OnInit {

  isSaving:boolean = false;

  schoolForm: FormGroup = new FormGroup({
    schoolName: new FormControl('', [Validators.required])
  });

  constructor(private addSchoolService: AddSchoolService, private util: UtilService, private router: Router) { }

  ngOnInit() {
  }

  addSchool(form: NgForm) {
    this.addSchoolService.addSchool({
      schoolName: form.value.schoolName,
      adminEmail: form.value.adminEmail,
      adminPassword: form.value.adminPassword
    },(err, data)=>{
      if(err) {
        this.util.openSnackBar(err.error,err.statusText);
        return;
      }
      this.router.navigate(["/admin/schools"]);
    })
  }

}
