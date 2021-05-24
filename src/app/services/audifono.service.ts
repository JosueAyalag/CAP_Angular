import { HttpClient } from '@angular/common/http';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Audifono } from '../model/audifono.model';

@Injectable({
  providedIn: 'root'
})
export class AudifonoService {

  constructor(private http: HttpClient) { }

  getAudifonos(): Observable<[Audifono]>{
    return this.http.get<[Audifono]>('https://super-rest.herokuapp.com/test/audifonos');
  }

  getSingleAudifono(id: string): Observable<Audifono>{
    return this.http.get<Audifono>('https://super-rest.herokuapp.com/test/audifonos/' + id);
  }

  saveAudifonos(item: Audifono, id?: string): Observable<any>{
    //update
    if(id !== ''){
      return this.http.put('https://super-rest.herokuapp.com/test/audifonos/' + id, item);
    }
    return this.http.post('https://super-rest.herokuapp.com/test/audifonos', item);
  }

  deleteAudifonos(id: string): Observable<any> {
    return this.http.delete('https://super-rest.herokuapp.com/test/audifonos/' + id);
  }
}
