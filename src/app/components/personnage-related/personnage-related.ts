import { Component, ElementRef, input, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Program } from '../../models/program.model';

@Component({
  selector: 'app-personnage-related',
  imports: [RouterLink],
  templateUrl: './personnage-related.html',
  styleUrl: './personnage-related.css',
})
export class PersonnageRelated {
  programs = input.required<Program[]>();

  private scrollContainer = viewChild.required<ElementRef<HTMLElement>>('scrollContainer');

  scroll(direction: 'prev' | 'next'): void {
    const el = this.scrollContainer().nativeElement;
    // RTL scroll containers use negative scrollLeft to reveal further content.
    const amount = el.clientWidth * 0.6 * (direction === 'next' ? -1 : 1);
    el.scrollBy({ left: amount, behavior: 'smooth' });
  }

  displayName(program: Program): string {
    return program.presenter || program.name;
  }
}

