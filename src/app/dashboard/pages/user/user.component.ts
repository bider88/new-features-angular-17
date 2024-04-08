import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';
import { User } from '../../../interfaces/users-response.interface';
import { UsersService } from '../../../services/users.service';
import { switchMap } from 'rxjs';

@Component({
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './user.component.html',
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private userService = inject(UsersService);

  // public user = signal<User | undefined>(undefined);
  public user = toSignal<User | undefined>(
    this.route.params.pipe(
      switchMap(({id}) => this.userService.getUserById(id))
    )
  );

  public fullName = computed(
    () => (this.user() ? `${this.user()?.first_name} ${this.user()?.last_name}` : '')
  );
}
