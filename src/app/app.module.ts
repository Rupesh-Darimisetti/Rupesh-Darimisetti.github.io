import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { FooterComponent } from './components/footer/footer.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { ResponsiveDirective } from './directives/responsive.directive';
@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent,
    BannerComponent,
    EducationComponent,
    PersonalInformationComponent,
    ProjectsComponent,
    WorkExperienceComponent,
    ResponsiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
