import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BannerComponent } from './banner/banner.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';



@NgModule({
  declarations: [
    NavBarComponent,
    BannerComponent,
    AboutMeComponent,
    ExperienceComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    NavBarComponent,
    BannerComponent,
    AboutMeComponent,
    ExperienceComponent
  ]
})
export class SharedModule { }
