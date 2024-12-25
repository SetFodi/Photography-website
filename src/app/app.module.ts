import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { serverRoutes } from './app.routes.server';
import { HoverDirective } from './directives/hover.directive'; // Import your routes
import { HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(serverRoutes), // Use standalone components in routes
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
