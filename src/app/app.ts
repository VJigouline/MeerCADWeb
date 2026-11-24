import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { githubProfile, sceneEditor } from './projects';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly github = githubProfile;
  protected readonly sceneEditorApp = sceneEditor.app;
  protected readonly year = new Date().getFullYear();
}
