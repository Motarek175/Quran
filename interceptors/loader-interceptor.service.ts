import {
  HttpEventType,
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http';
import { BehaviorSubject, finalize, tap } from 'rxjs';
export const load = new BehaviorSubject<boolean>(false);
export function loader(req: HttpRequest<any>, next: HttpHandlerFn) {
  if (req.method === 'GET') {
    load.next(true);

    return next(req).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          load.next(false);
        }
      }),
      finalize(() => {
        load.next(false);
      })
    );
  }
  return next(req);
}
