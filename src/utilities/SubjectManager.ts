import { Observable, Subject } from 'rxjs'

export class SubjectManager {
  private readonly subject$ = new Subject<boolean>()

  getSubject (): Observable<boolean> {
    return this.subject$.asObservable()
  }

  setSubject (value: boolean): void {
    this.subject$.next(value)
  }
}
