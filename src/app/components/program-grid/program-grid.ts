import { Component, input } from '@angular/core';
import { Program } from '../../models/program.model';
import { ProgramCard } from '../program-card/program-card';

@Component({
  selector: 'app-program-grid',
  imports: [ProgramCard],
  templateUrl: './program-grid.html',
  styleUrl: './program-grid.css',
})
export class ProgramGrid {
  programs = input<Program[]>([]);
}
