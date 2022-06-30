import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GreenAiApiService {

  readonly greenAPIUrl ="https://localhost:7164/api"
  constructor(private http: HttpClient) { }

  //Project CRUD methods
  getProjectList(): Observable<any[]> {
    return this.http.get<any>(this.greenAPIUrl + '/project');
  }

  addProject(data:any) {
    return this.http.post(this.greenAPIUrl + '/project', data);
  }

  updatePorject(id:number | string, data:any) {
    return this.http.put(this.greenAPIUrl + `/project/${id}`, data);
  }

  deleteProject(id: number | string) {
    return this.http.delete(this.greenAPIUrl + `/project${id}`)
  }


  //Country CRUD methods
  getCountryList(): Observable<any[]> {
    return this.http.get<any>(this.greenAPIUrl + '/Country');
  }

  addCountry(data: any) {
    return this.http.post(this.greenAPIUrl + '/Country', data);
  }

  updateCountry(id: number | string, data: any) {
    return this.http.put(this.greenAPIUrl + `/Country/${id}`, data);
  }

  deleteCountry(id: number | string) {
    return this.http.delete(this.greenAPIUrl + `/Country{id}`)
  }


  //Project Accounting CRUD methods
  getProjectAccountingList(): Observable<any[]> {
    return this.http.get<any>(this.greenAPIUrl + '/ProjectAccounting');
  }

  addProjectAccounting(data: any) {
    return this.http.post(this.greenAPIUrl + '/ProjectAccounting', data);
  }

  updateProjectAccounting(id: number | string, data: any) {
    return this.http.put(this.greenAPIUrl + `/ProjectAccounting/${id}`, data);
  }

  deleteProjectAccounting(id: number | string) {
    return this.http.delete(this.greenAPIUrl + `/ProjectAccounting{id}`)
  }


  //Project Status CRUD methods
  getProjectStatusList(): Observable<any[]> {
    return this.http.get<any>(this.greenAPIUrl + '/ProjectStatus');
  }

  addProjectStatus(data: any) {
    return this.http.post(this.greenAPIUrl + '/ProjectStatus', data);
  }

  updateProjectStatus(id: number | string, data: any) {
    return this.http.put(this.greenAPIUrl + `/ProjectStatus/${id}`, data);
  }

  deleteProjectStatus(id: number | string) {
    return this.http.delete(this.greenAPIUrl + `/ProjectStatus{id}`)
  }


  //Provider CRUD methods
  getProviderList(): Observable<any[]> {
    return this.http.get<any>(this.greenAPIUrl + '/Provider');
  }

  addProvider(data: any) {
    return this.http.post(this.greenAPIUrl + '/Provider', data);
  }

  updateProvider(id: number | string, data: any) {
    return this.http.put(this.greenAPIUrl + `/Provider/${id}`, data);
  }

  deleteProvider(id: number | string) {
    return this.http.delete(this.greenAPIUrl + `/Provider{id}`)
  }


  
  //TypeProject CRUD methods
  getTypeProject(): Observable<any[]> {
    return this.http.get<any>(this.greenAPIUrl + '/TypeProject');
  }

  addTypeProject(data: any) {
    return this.http.post(this.greenAPIUrl + '/TypeProject', data);
  }

  updateTypeProject(id: number | string, data: any) {
    return this.http.put(this.greenAPIUrl + `/TypeProject/${id}`, data);
  }

  deleteTypeProject(id: number | string) {
    return this.http.delete(this.greenAPIUrl + `/TypeProject{id}`)
  }
}

