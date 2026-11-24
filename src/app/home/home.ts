import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';
import { geometryLibraries, sceneEditor, sceneEditorLibraries } from '../projects';

/** The home page: SceneEditor first, then the libraries. */
@Component({
  selector: 'app-home',
  imports: [ProjectCard],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly sceneEditor = sceneEditor;
  protected readonly sceneEditorLibraries = sceneEditorLibraries;
  protected readonly geometryLibraries = geometryLibraries;
}
