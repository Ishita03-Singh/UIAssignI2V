import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user = {
    name: 'Mayank Singh',
    email: 'mayank.singh@cleohealth.in',
    avatar: 'assets/avatars/mayank.jpg'
  };
  
  menuItems = [
    { icon: 'user', label: 'My profile', route: '/profile' },
    { icon: 'settings', label: 'Account Settings', route: '/settings' },
    { icon: 'help-circle', label: 'Help & Support', route: '/help' },
    { icon: 'log-out', label: 'Logout', route: '/logout' }
  ];
}