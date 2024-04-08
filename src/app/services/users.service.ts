import { Injectable, computed, inject, signal } from '@angular/core';
import { User, UsersResponse } from '../interfaces/users-response.interface';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly http = inject(HttpClient);

  #state = signal<State>({
    loading: true,
    users: []
  });

  public users = computed(() => this.#state().users);

  constructor() {
    console.log('loading data...');
    this.http.get<UsersResponse>('https://reqres.in/api/users')
    .pipe(delay(1500))
    .subscribe( res => {
      this.#state.set({
        loading: false,
        users: res.data
      })
    });
  }

}
