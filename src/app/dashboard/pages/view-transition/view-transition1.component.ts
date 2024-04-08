import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [
    TitleComponent
  ],
  template: `
    <app-title title="View transition 1" />
    <section class="flex justify-start">
      <img
        alt="picsum"
        srcset="https://picsum.photos/id/237/200/300"
        width="200"
        height="300"
        style="view-transition-name: hero1;"
      />
      <div
        style="view-transition-name: hero2;"
        class="bg-blue-500 w-56 h-56">
      </div>
    </section>
  `
})
export default class ViewTransition1Component {

}
