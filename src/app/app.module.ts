import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './features/footer/footer.component';
import { HeaderComponent } from './features/header/header.component';
import { SideMenuComponent } from './features/side-menu/side-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './features/home/home.component';
import { WorksComponent } from './features/works/works.component';
import { BlogComponent } from './features/blog/blog.component';
import { ContactComponent } from './features/contact/contact.component';
import { ButtonModule } from 'primeng/button';
import { TodoListComponent } from './features/works/todo-list/todo-list.component';
import { DialogModule } from 'primeng/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { AddTaskComponent } from './features/works/todo-list/add-task/add-task.component';
import { AddListComponent } from './features/works/todo-list/add-list/add-list.component';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SideMenuComponent,
    HomeComponent,
    WorksComponent,
    BlogComponent,
    ContactComponent,
    TodoListComponent,
    AddTaskComponent,
    AddListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    DialogModule,
    MatDialogModule,
    InputTextModule,
    FormsModule,
    ToastModule,
    HttpClientModule,
    CardModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
