import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tc-path-not-found',
  templateUrl: './path-not-found.component.html',
  styleUrls: ['./path-not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PathNotFoundComponent {
  readonly url = this.router.url;

  constructor(private router: Router) {}
}
