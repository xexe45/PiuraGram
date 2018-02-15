import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [NopageFoundComponent, NavbarComponent],
  imports: [BrowserModule, CommonModule, PipesModule],
  exports: [NopageFoundComponent, NavbarComponent, PipesModule]
})
export class SharedModule {}
