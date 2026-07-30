import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Clone request and append authorization header
  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: 'Bearer mock-token-12345',
    },
  });
  return next(clonedRequest);
};
