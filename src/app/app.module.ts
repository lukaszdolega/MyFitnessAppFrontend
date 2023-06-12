import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { FullpageComponent } from './layouts/fullpage/fullpage.component';
import { LoginComponent } from './modules/login/login.component';
import { FullpageModule } from './layouts/fullpage/fullpage.module';
import { FullpageadminComponent } from './layouts/fullpageadmin/fullpageadmin.component';
import { AdminComponent } from './modules/admin/admin.component';
import { FullpageadminModule } from './layouts/fullpageadmin/fullpageadmin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    FullpageModule,
    FullpageadminModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
