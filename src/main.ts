import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { serverRoutes } from './app/app.routes.server';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(serverRoutes),
    provideHttpClient(), // This replaces HttpClientModule
  ],
}).catch((err) => console.error(err));
