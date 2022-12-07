import { Observable, Subject } from 'rxjs'

export class SubjectManager<T> {
  private readonly subject$ = new Subject<T>()

  getSubject (): Observable<T> {
    return this.subject$.asObservable()
  }

  setSubject (value: T): void {
    this.subject$.next(value)
  }
}
