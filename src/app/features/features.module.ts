import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { MatProgressBarModule } from '@angular/material';
import { OwlModule } from 'ngx-owl-carousel';
import { ResumeComponent } from './resume/resume.component';
import { TechstackComponent } from './techstack/techstack.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { StickyNoteComponent } from './techstack/sticky-note/sticky-note.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ResumeComponent,
    TechstackComponent,
    CertificatesComponent,
    StickyNoteComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatProgressBarModule,
    OwlModule
  ],
  exports: [
    HeaderComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeaturesModule { }
