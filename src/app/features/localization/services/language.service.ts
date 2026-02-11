import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private lnEn: any;
  private lnLocal: any;

  public setLnEn(data: any) {
    this.lnEn = data;
  }

  public setLnLocal(data: any) {
    this.lnLocal = data;
  }

  public translate(text: string, group: string | null): string {
    let dic: any;
    text = (text || '').toLocaleLowerCase();
    if (this.lnLocal) {
      dic = this.lnLocal;
      if (group && dic[group]) {
        dic = dic[group];
      }
      if (dic[text]) {
        return dic[text];
      }
    }

    if (this.lnEn) {
      dic = this.lnEn;
      if (group && dic[group]) {
        dic = dic[group];
      }
      if (dic[text]) {
        return dic[text];
      }
    }

    console.warn('Text: [ ', text, ' ]');
    return text;
  }
}
