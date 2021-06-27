import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { DetailDialogComponent } from './detail-dialog/detail-dialog.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CreateComponent, DetailDialogComponent],
  imports: [
    BrowserModule,
    ButtonModule,
    RippleModule,
    FormsModule,
    TableModule,
    InputTextModule,
    ConfirmDialogModule,
    DialogModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
