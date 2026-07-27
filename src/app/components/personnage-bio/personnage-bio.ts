import { Component, input } from '@angular/core';
import { Program } from '../../models/program.model';

@Component({
  selector: 'app-personnage-bio',
  imports: [],
  templateUrl: './personnage-bio.html',
  styleUrl: './personnage-bio.css',
})
export class PersonnageBio {
  program = input.required<Program>();
}
