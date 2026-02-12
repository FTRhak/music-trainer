import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { LanguageService } from '../services/language.service';

@Directive({
  selector: '[translate]',
  standalone: false,
})
export class TranslateDirective implements OnChanges {
  @Input('translate') group: string | null = null;

  @HostBinding('innerHtml')
  public content!: string;

  constructor(
    private readonly el: ElementRef<HTMLElement>,
    private readonly ln: LanguageService,
  ) {}

  public ngOnChanges(changes: SimpleChanges) {
    if (this.el?.nativeElement) {
      const text = this.el.nativeElement.textContent;
      this.content = this.ln.translate(text as string, this.group);
    }
  }
}
