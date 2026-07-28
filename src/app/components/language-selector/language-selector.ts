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
    { code: 'de', label: 'الألمانية', flagUrl: '/stageprojet/images/flags/de.png' },
    { code: 'it', label: 'الإيطالية', flagUrl: '/stageprojet/images/flags/it.png' },
    { code: 'es', label: 'الإسبانية', flagUrl: '/stageprojet/images/flags/es.png' },
    { code: 'gb', label: 'الإنجليزية', flagUrl: '/stageprojet/images/flags/gb.png' },
    { code: 'fr', label: 'الفرنسية', flagUrl: '/stageprojet/images/flags/fr.png' },
    { code: 'ma', label: 'العربية', flagUrl: '/stageprojet/images/flags/ma.png', active: true },
  ]);

  select(selected: Language): void {
    this.languages.update((langs) =>
      langs.map((lang) => ({ ...lang, active: lang.code === selected.code })),
    );
  }
}


