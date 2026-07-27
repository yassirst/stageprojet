import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { AboutHero } from '../../components/about-hero/about-hero';
import { AboutChannel } from '../../components/about-channel/about-channel';
import { AppDownload } from '../../components/app-download/app-download';
import { PlatformInfo } from '../../components/platform-info/platform-info';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-about',
  imports: [Header, AboutHero, AboutChannel, AppDownload, PlatformInfo, Footer],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}

