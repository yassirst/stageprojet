import { Component, computed, inject, input, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Episode } from '../../models/program.model';

@Component({
  selector: 'app-personnage-episodes',
  imports: [],
  templateUrl: './personnage-episodes.html',
  styleUrl: './personnage-episodes.css',
})
export class PersonnageEpisodes {
  private sanitizer = inject(DomSanitizer);

  episodes = input.required<Episode[]>();

  activeVideoId = signal<string | null>(null);

  activeVideoUrl = computed<SafeResourceUrl | null>(() => {
    const id = this.activeVideoId();
    if (!id) return null;
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${id}?autoplay=1`,
    );
  });

  openVideo(videoId: string) {
    this.activeVideoId.set(videoId);
  }

  closeVideo() {
    this.activeVideoId.set(null);
  }
}
