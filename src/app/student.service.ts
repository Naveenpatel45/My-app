import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _httpClient: HttpClient) { }
  getStudents(): Observable<any> {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student")
  }
  createstudent(data: any): Observable<any> {
    return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/student", data)
  }
  getfilteredstudents(term: string): Observable<any> {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter=" + term)
  }
  getsortedstudents(column: string, order: string): Observable<any> {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy=" + column + "&order=" + order)
  }
  getpagedstudents(page: number): Observable<any> {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit=10&page=" + page)
  }
  deletedStudents(id: number): Observable<any> {
    return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/student/" + id)
  }


}
