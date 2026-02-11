import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Pipe({
  name: 'tl',
  pure: true,
  standalone: false,
})
export class TranslatePipe implements PipeTransform {
  constructor(private readonly ln: LanguageService) {}

  transform(value: string, group: string | null = null): unknown {
    return this.ln.translate(value, group);
  }
}
