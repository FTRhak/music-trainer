import { CommonModule } from '@angular/common';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslatePipe } from './pipes/translate.pipe';
import { TranslateDirective } from './directives/translate.directive';

@NgModule({
  declarations: [TranslatePipe, TranslateDirective],
  exports: [TranslatePipe, TranslateDirective],
  imports: [CommonModule],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class LocalizationModule {}
