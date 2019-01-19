import { Injectable } from '@angular/core';
import { ConfigService } from '../../../common/services/config.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddSchoolService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  public addSchool(schoolForm: any, callback) {
    console.log(schoolForm)
    this.http.post(this.config.apiBaseUrl + "schools/add" ,schoolForm).subscribe(data=>{
      callback(null, data);
    },
    err=>{
      callback(err, null);
    });
  }
}
