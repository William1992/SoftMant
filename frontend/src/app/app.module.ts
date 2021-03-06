import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//wmorocho importado 
import{FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'
//fin importado
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
