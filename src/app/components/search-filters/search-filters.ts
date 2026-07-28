import { Component, input, output } from '@angular/core';

export interface ProgramFilters {
  search: string;
  program: string;
  topic: string;
}

@Component({
  selector: 'app-search-filters',
  imports: [],
  templateUrl: './search-filters.html',
  styleUrl: './search-filters.css',
})
export class SearchFilters {
  programOptions = input<string[]>([]);
  topicOptions = input<string[]>([]);

  filtersChange = output<ProgramFilters>();

  search = '';
  program = '';
  topic = '';

  emitChange(): void {
    this.filtersChange.emit({
      search: this.search,
      program: this.program,
      topic: this.topic,
    });
  }
}


