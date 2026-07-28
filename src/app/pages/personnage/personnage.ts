import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { Header } from '../../components/header/header';
import { PersonnageHero } from '../../components/personnage-hero/personnage-hero';
import { PersonnageBio } from '../../components/personnage-bio/personnage-bio';
import { PersonnageEpisodes } from '../../components/personnage-episodes/personnage-episodes';
import { PersonnageCta } from '../../components/personnage-cta/personnage-cta';
import { PersonnageRelated } from '../../components/personnage-related/personnage-related';
import { Footer } from '../../components/footer/footer';
import { PROGRAMS } from '../../data/programs.data';

@Component({
  selector: 'app-personnage',
  imports: [
    RouterLink,
    Header,
    PersonnageHero,
    PersonnageBio,
    PersonnageEpisodes,
    PersonnageRelated,
    PersonnageCta,
    Footer,
  ],
  templateUrl: './personnage.html',
  styleUrl: './personnage.css',
})
export class Personnage {
  private route = inject(ActivatedRoute);

  private id = toSignal(this.route.paramMap.pipe(map((params) => Number(params.get('id')))), {
    initialValue: NaN,
  });

  program = computed(() => PROGRAMS.find((p) => p.id === this.id()));

  relatedPrograms = computed(() => PROGRAMS.filter((p) => p.id !== this.id()));
}


