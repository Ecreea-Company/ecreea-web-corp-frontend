import { Observable, Subject } from 'rxjs'

export class SubjectManager {
  private readonly subject$ = new Subject<any>()

  getSubject (): Observable<any> {
    return this.subject$.asObservable()
  }

  setSubject (value: any): void {
    this.subject$.next(value)
  }
}
