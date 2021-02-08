import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { LoginComponent } from './@pages/auth/login/login.component';
import { HeaderComponent } from './@shared/header/header.component';
import { FooterComponent } from './@shared/footer/footer.component';
import { ForOForComponent } from './@pages/for-o-for/for-o-for.component';
import { HomeComponent } from './@pages/home/home.component';

import { MatSliderModule } from '@angular/material/slider';
import { FormComponent } from './test/form/form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragComponent } from './test/drag/drag.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CalendarComponent } from './test/calendar/calendar.component';
import { AppareilModule } from './test/appareil/appareil.module';
import { RootModule } from './@pages/root/root.module';
import { UserModule } from './@pages/root/user/user.module';
import { UserListComponent } from './@pages/root/user/component/user-list/user-list.component';
import { UserDetailsComponent } from './@pages/root/user/component/user-details/user-details.component';
import { UserFormComponent } from './@pages/root/user/component/user-form/user-form.component';
import { SidebarComponent } from './@shared/sidebar/sidebar.component';
import { LeftbarComponent } from './@shared/leftbar/leftbar.component';
import { RightbarComponent } from './@shared/rightbar/rightbar.component';
import { DragList } from './test/drag/component/drag.list';

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent,
    UserFormComponent,
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ForOForComponent,
    HomeComponent,
    FormComponent,
    DragComponent,
    CalendarComponent,
    SidebarComponent,
    LeftbarComponent,
    RightbarComponent,
    DragList,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppareilModule,
    RootModule,
    UserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot(),

    MatSliderModule,

    MatInputModule,

    MatButtonModule,

    MatSelectModule,

    MatRadioModule,

    MatCardModule,

    ReactiveFormsModule,

    DragDropModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
