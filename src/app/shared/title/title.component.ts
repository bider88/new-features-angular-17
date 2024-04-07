import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute, input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [
    CommonModule
  ],
  styles: ``,
  template: `
    <h1 class="text-3xl mb-5" [ngClass]="{'shadow': withShadow}">{{ title }}</h1>
  `
})
export class TitleComponent {
  // Old way to use input (props) - stable
  @Input({required: true}) title!: string;
  @Input({transform: booleanAttribute}) withShadow: boolean = false;

  // New approach to use input with signals - developer preview
  // public title = input.required<string>();

  /**
   * @memberof TitleComponent
   * @Eg <app-title title="Some title" withShadow/>
   */
  // public withShadow = input(false, {
  //   transform: (value: boolean|string) => typeof value === 'string' ? value === '' : value
  // });
}
