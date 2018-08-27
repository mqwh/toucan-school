import { Injectable } from '@angular/core';
import { FlatNavItem } from '@toucan/data/models';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  loadNavMenu(_layout: string) {
    return of(getRootMenu());
  }
}

function getRootMenu(): FlatNavItem {
  return {
    key: 'root',
    children: [
      { key: 'agenda', url: '/agenda', icon: 'today', label: '日程' },
      { key: 'student', url: '/student', icon: 'group', label: '学员信息' },
      { key: 'course', url: '/course', icon: 'school', label: '课程考勤' },
      { key: 'setting', url: '/settings', icon: 'settings', label: '设置' }
    ]
  };
}
