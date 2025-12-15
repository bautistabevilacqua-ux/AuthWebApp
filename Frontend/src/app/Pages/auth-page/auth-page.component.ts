import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'auth-page',
  imports: [RouterOutlet],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPageComponent {}
