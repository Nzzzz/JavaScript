/**
 * Created by Administrator on 2017/4/25 0025.
 */
import { Injectable } from '@angular/core';
import { Headers,Http }       from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero }       from './hero';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';
  constructor(
    private http: Http
  ) {}
  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response =>response.json().data as Hero[])
            .catch(this.handleError)
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response =>response.json().data as Hero)
      .catch(this.handleError);
  }

  private headers = new Headers({'content-Type': 'application/json'});

  update(hero:Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name:name}),{headers:this.headers})
      .toPromise()
      .then(res => res.json().data as Hero)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
