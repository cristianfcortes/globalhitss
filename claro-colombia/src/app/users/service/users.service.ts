import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http:HttpClient,
  ) { }

  list():Observable<any>{
    const endpoint = environment.users;
    return this.http.get(endpoint);
  }

  delete(id){
    const endpoint = `${environment.users}/${id}`;
    return this.http.delete(endpoint);
  }

  create(data){
    const endpoint = `${environment.users}`;
    return this.http.post(endpoint, data);
  }

  update(data){
    const endpoint = `${environment.users}/${data.id}`;
    return this.http.put(endpoint, data);
  }


}
