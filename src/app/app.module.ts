import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, FormComponent, ListComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
