import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Project } from '../projects';

/** A card for one library: what it does, and links to its documentation and code. */
@Component({
  selector: 'app-project-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let p = project();
    <article class="card" [attr.aria-labelledby]="p.name + '-title'">
      <h3 class="name" [id]="p.name + '-title'">
        <a [href]="p.repository">{{ p.name }}</a>
      </h3>
      <p class="summary">{{ p.summary }}</p>
      <ul class="tags" aria-label="Highlights">
        @for (tag of p.tags; track tag) {
          <li>{{ tag }}</li>
        }
      </ul>
      <ul class="links">
        @if (p.documentation) {
          <li><a [href]="p.documentation">Documentation</a></li>
        }
        @if (p.gettingStarted) {
          <li><a [href]="p.gettingStarted">Getting started</a></li>
        }
        @for (link of p.links; track link.url) {
          <li><a [href]="link.url">{{ link.label }}</a></li>
        }
        <li><a [href]="p.repository">GitHub</a></li>
      </ul>
    </article>
  `,
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  readonly project = input.required<Project>();
}
