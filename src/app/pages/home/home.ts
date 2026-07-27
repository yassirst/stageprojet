import { Component, computed, signal } from '@angular/core';
import { Header } from '../../components/header/header';
import { HeroBanner } from '../../components/hero-banner/hero-banner';
import { LanguageSelector } from '../../components/language-selector/language-selector';
import { SearchFilters, ProgramFilters } from '../../components/search-filters/search-filters';
import { ProgramGrid } from '../../components/program-grid/program-grid';
import { Footer } from '../../components/footer/footer';
import { Program } from '../../models/program.model';
import { PROGRAMS } from '../../data/programs.data';

@Component({
  selector: 'app-home',
  imports: [Header, HeroBanner, LanguageSelector, SearchFilters, ProgramGrid, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  programs = signal<Program[]>(PROGRAMS);

  filters = signal<ProgramFilters>({ search: '', program: '', topic: '' });

  programNames = computed(() => Array.from(new Set(this.programs().map((p) => p.name))));
  topics = computed(() => Array.from(new Set(this.programs().map((p) => p.topic))));

  filteredPrograms = computed(() => {
    const { search, program, topic } = this.filters();
    const query = search.trim().toLowerCase();

    return this.programs().filter((p) => {
      const matchesSearch =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.presenter.toLowerCase().includes(query);
      const matchesProgram = !program || p.name === program;
      const matchesTopic = !topic || p.topic === topic;
      return matchesSearch && matchesProgram && matchesTopic;
    });
  });

  onFiltersChange(filters: ProgramFilters): void {
    this.filters.set(filters);
  }
}
