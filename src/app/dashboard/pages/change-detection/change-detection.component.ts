import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-title [title]="titleWithFramework()" />
    <p>Signal</p>
    <pre> {{ frameworkAsSignal() | json }} </pre>
    <hr>
    <p>Property</p>
    <pre> {{ frameworkAsProperty | json }} </pre>
    @if(done()) {
      <div class="bg-green-500 p-2 mt-2 rounded text-white font-bold">Done!</div>
    }
  `,
  styles: ``
})
export default class ChangeDetectionComponent {
  public titleWithFramework =  computed(() => `Change detection - ${this.frameworkAsSignal().name}`);
  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: '2028'
  });
  public done = signal(false);

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: '2028'
  };

  constructor() {
    setTimeout(() => {
      this.frameworkAsSignal.update( value => ({
        ...value,
        name: 'Vue'
      }));

      // this.frameworkAsProperty.name = 'Vue';
      this.done.set(true);
      console.log('Done...');
    }, 3000);
  }
}
