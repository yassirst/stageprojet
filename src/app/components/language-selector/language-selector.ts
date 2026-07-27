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
    { code: 'de', label: 'Ø§Ù„Ø£Ù„Ù…Ø§Ù†ÙŠØ©', flagUrl: '/stageprojet/images/flags/de.png' },
    { code: 'it', label: 'Ø§Ù„Ø¥ÙŠØ·Ø§Ù„ÙŠØ©', flagUrl: '/stageprojet/images/flags/it.png' },
    { code: 'es', label: 'Ø§Ù„Ø¥Ø³Ø¨Ø§Ù†ÙŠØ©', flagUrl: '/stageprojet/images/flags/es.png' },
    { code: 'gb', label: 'Ø§Ù„Ø¥Ù†Ø¬Ù„ÙŠØ²ÙŠØ©', flagUrl: '/stageprojet/images/flags/gb.png' },
    { code: 'fr', label: 'Ø§Ù„ÙØ±Ù†Ø³ÙŠØ©', flagUrl: '/stageprojet/images/flags/fr.png' },
    { code: 'ma', label: 'Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©', flagUrl: '/stageprojet/images/flags/ma.png', active: true },
  ]);

  select(selected: Language): void {
    this.languages.update((langs) =>
      langs.map((lang) => ({ ...lang, active: lang.code === selected.code })),
    );
  }
}

