import { ResolveFn } from '@angular/router';

export const courseResolver: ResolveFn<any> = (route, state) => {
  const courseId = route.paramMap.get('id');
  // Return your course data fetching logic or mock object here
  return { id: courseId, title: 'Sample Course Details' };
};
