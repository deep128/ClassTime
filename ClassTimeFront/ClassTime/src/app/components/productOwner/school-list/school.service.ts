import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/common/services/config.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  public getSchools(start: number, limit: number, callback) {
    const options = {
      params: new HttpParams().set('limit',limit.toString()).set('start', start.toString())
    }
    this.http.get(this.config.apiBaseUrl + "schools", options).subscribe(data=>{
      callback(null, data);
    },err=>{
      callback(err, null);
    });
  }
}
