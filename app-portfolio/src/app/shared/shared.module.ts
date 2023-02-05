import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BannerComponent } from './banner/banner.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HardAndSoftComponent } from './hard-and-soft/hard-and-soft.component';
import { ProyectosComponent } from './proyectos/proyectos.component';



@NgModule({
  declarations: [
    NavBarComponent,
    BannerComponent,
    AboutMeComponent,
    ExperienceComponent,
    EducacionComponent,
    HardAndSoftComponent,
    ProyectosComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    NavBarComponent,
    BannerComponent,
    AboutMeComponent,
    ExperienceComponent,
    EducacionComponent,
    HardAndSoftComponent,
    ProyectosComponent
  ]
})
export class SharedModule { }
