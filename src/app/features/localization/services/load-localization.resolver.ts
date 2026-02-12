import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import {
  asyncScheduler,
  combineLatestAll,
  map,
  Observable,
  scheduled,
} from 'rxjs';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root',
})
export class LoadLocalizationResolver implements Resolve<boolean> {
  constructor(
    private readonly http: HttpClient,
    private readonly language: LanguageService,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    return scheduled(
      [
        this.http.get('./assets/ln/en.language.json'),
        this.http.get('./assets/ln/uk.language.json'),
      ],
      asyncScheduler,
    ).pipe(
      combineLatestAll(),
      map((res) => {
        this.language.setLnEn(res[0]);
        this.language.setLnLocal(res[1]);
        return true;
      }),
    );
  }
}
