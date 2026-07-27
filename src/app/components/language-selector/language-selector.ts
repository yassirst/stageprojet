import { Component, signal } from '@angular/core';
import { Language } from '../../models/language.model';

@Component({
  selector: 'app-language-selector',
  imports: [],
  templateUrl: './language-selector.html',
  styleUrl: './language-selector.css',
})
export class LanguageSelector {
  languages = signal<Language[]>([
    { code: 'de', label: 'الألمانية', flagUrl: '/images/flags/de.png' },
    { code: 'it', label: 'الإيطالية', flagUrl: '/images/flags/it.png' },
    { code: 'es', label: 'الإسبانية', flagUrl: '/images/flags/es.png' },
    { code: 'gb', label: 'الإنجليزية', flagUrl: '/images/flags/gb.png' },
    { code: 'fr', label: 'الفرنسية', flagUrl: '/images/flags/fr.png' },
    { code: 'ma', label: 'العربية', flagUrl: '/images/flags/ma.png', active: true },
  ]);

  select(selected: Language): void {
    this.languages.update((langs) =>
      langs.map((lang) => ({ ...lang, active: lang.code === selected.code })),
    );
  }
}
