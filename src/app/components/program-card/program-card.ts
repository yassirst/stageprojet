import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Program } from '../../models/program.model';

@Component({
  selector: 'app-program-card',
  imports: [RouterLink],
  templateUrl: './program-card.html',
  styleUrl: './program-card.css',
})
export class ProgramCard {
  program = input.required<Program>();

  initials = computed(() => {
    const words = this.program().presenter.trim().split(/\s+/);
    return words
      .slice(0, 2)
      .map((word) => word.charAt(0))
      .join('');
  });
}

