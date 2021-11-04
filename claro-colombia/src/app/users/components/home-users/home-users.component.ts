import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, forkJoin, Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-home-users',
  templateUrl: './home-users.component.html',
  styleUrls: ['./home-users.component.scss']
})
export class HomeUsersComponent implements OnInit {

  user$ :Observable<{}>;
  term:string;
  list = [];
  createUserForm: FormGroup;

  constructor(
    private fb:FormBuilder,
    private userService:UsersService
  ) { }

  ngOnInit(): void {
    this.userService.list().subscribe(res => {
      this.list = res;
    });

    this.createUserForm = this.initCreateUserFormGroup();
  }

  initCreateUserFormGroup():FormGroup {
    return this.fb.group({
      firstName:['', Validators.required],
      Title:['', Validators.required]
    })
  }

  deleteUser(id){
    this.userService.delete(id).subscribe( res => {
      if(!res){
        alert('Hubo un problema eliminando el usuario')
        return false
      }
      this.list = this.list.filter(item => item.id != id);
      alert('Se elimino exitosamente el usuario')
    })
  }

  submit(){
    this.userService.create(this.createUserForm.value).subscribe(res => {
      this.list.unshift(res);
      this.createUserForm.reset();
    });
  }
}

