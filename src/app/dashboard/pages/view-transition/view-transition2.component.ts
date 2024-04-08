import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [
    TitleComponent
  ],
  template: `
    <app-title title="View transition 2" />
    <section class="flex justify-end">
      <img
        class="rounded-full"
        alt="picsum"
        srcset="https://picsum.photos/id/237/200/300"
        width="200"
        style="view-transition-name: hero1;"
      />
      <div
        style="view-transition-name: hero2;"
        class="fixed bottom-16 right-10 bg-blue-800 w-32 h-32 rounded-full">
      </div>
    </section>
  `
})
export default class ViewTransition2Component {

}
