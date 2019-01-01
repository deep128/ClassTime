import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public readonly apiBaseUrl = "http://localhost:3000/";
  public readonly roles = {ADMIN: "ADMIN"}

  constructor() { }
}
