import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Program } from '../../models/program.model';

@Component({
  selector: 'app-personnage-hero',
  imports: [RouterLink],
  templateUrl: './personnage-hero.html',
  styleUrl: './personnage-hero.css',
})
export class PersonnageHero {
  program = input.required<Program>();

  displayName = computed(() => this.program().presenter || this.program().name);

  heroBackground = computed(() => {
    const photo = this.program().heroPhoto || this.program().photoUrl;
    return `linear-gradient(to top, rgba(10, 61, 46, 0.85), rgba(10, 61, 46, 0) 45%), url(${photo})`;
  });
}
