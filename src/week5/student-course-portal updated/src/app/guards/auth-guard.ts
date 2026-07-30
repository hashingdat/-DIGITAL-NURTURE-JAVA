import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const isAuthenticated = true;
  // Toggle based on your auth state logic


  if (isAuthenticated) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }
};
