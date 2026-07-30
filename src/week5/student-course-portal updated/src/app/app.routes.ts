// import { Routes } from '@angular/router';
// import { authGuard } from './guards/auth-guard';
// import { courseResolver } from './resolvers/course-resolver';
//
// // export const routes: Routes = [
// //   // 1. Default Route: Redirects localhost:4200/ directly to /courses
// //   {
// //     path: '',
// //     redirectTo: 'courses',
// //     pathMatch: 'full',
// //   },
// //
// //   // 2. Main Course Catalog Page (Static route MUST come BEFORE dynamic routes)
// //   {
// //     path: 'courses',
// //     canActivate: [authGuard],
// //     loadComponent: () =>
// //       import('./pages/course-list/course-list').then((m) => m.CourseListComponent),
// //   },
// //
// //   // 3. Dynamic Course Detail Page (Uses param :id and pre-fetches data via courseResolver)
// //   {
// //     path: 'courses/:id',
// //     canActivate: [authGuard],
// //     resolve: { courseData: courseResolver },
// //     loadComponent: () =>
// //       import('./components/course-detail/course-detail').then((m) => m.CourseDetailsComponent),
// //   },
// //
// //   // 4. Fallback/Wildcard Route: Catches invalid URLs and redirects back to catalog
// //   {
// //     path: '**',
// //     redirectTo: 'courses',
// //   },
// // ];
//
//
//
//
//
//
// export const routes: Routes = [
//   {
//     path: '',
//     loadComponent: () => import('./pages/home/home').then((m) => m.Home), // <--- Point root to your Home component
//   },
//   {
//     path: 'courses',
//     canActivate: [authGuard],
//     loadComponent: () =>
//       import('./pages/course-list/course-list').then((m) => m.CourseListComponent),
//   },
//   {
//     path: 'courses/:id',
//     canActivate: [authGuard],
//     resolve: { courseData: courseResolver },
//     loadComponent: () =>
//       import('./components/course-detail/course-detail').then((m) => m.CourseDetailsComponent),
//   },
//   {
//     path: 'profile', // Matches routerLink="/profile"
//     canActivate: [authGuard],
//     loadComponent: () =>
//       import('./pages/student-profile/student-profile').then((m) => m.StudentProfile),
//   },
//   {
//     path: '**',
//     redirectTo: 'courses',
//   },
// ];
//

import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
import { courseResolver } from './resolvers/course-resolver';
import { StudentProfileComponent } from './pages/student-profile/student-profile';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'courses',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/course-list/course-list').then((m) => m.CourseListComponent),
  },
  {
    path: 'courses/:id',
    canActivate: [authGuard],
    resolve: { courseData: courseResolver },
    loadComponent: () =>
      import('./components/course-detail/course-detail').then((m) => m.CourseDetailsComponent),
  },
  {
    path: 'profile',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/student-profile/student-profile').then((m) => m.StudentProfileComponent),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
