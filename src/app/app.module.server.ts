import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { serverRoutes } from './app.routes.server';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    RouterModule.forRoot(serverRoutes), // Use the server-specific routes
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
