import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { HipsterTest01SharedModule } from 'app/shared/shared.module';
import { HipsterTest01CoreModule } from 'app/core/core.module';
import { HipsterTest01AppRoutingModule } from './app-routing.module';
import { HipsterTest01HomeModule } from './home/home.module';
import { HipsterTest01EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    HipsterTest01SharedModule,
    HipsterTest01CoreModule,
    HipsterTest01HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    HipsterTest01EntityModule,
    HipsterTest01AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class HipsterTest01AppModule {}
