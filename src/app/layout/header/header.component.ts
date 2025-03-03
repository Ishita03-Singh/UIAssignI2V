import { Component } from '@angular/core';
import { NotificationService } from '../../core/services/notification.service';
import { IUser } from '../../core/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  unreadCount = 0;
  userMenuOptions: any[] = [{ label: 'My profile', icon: "assets/icons/user-circle.svg" }, { label: 'Account Settings', icon: "assets/icons/setting.svg" }, { label: 'Help & Support', icon: "assets/icons/help.svg" }]
  quickAddMenuOptions: any[] = [{ label: 'User', icon: "assets/icons/user-circle.svg" }, { label: 'Department', icon: "assets/icons/briefcase.svg" }, { label: 'Advance', icon: "assets/icons/wallet-add.svg" }, { label: 'Document', icon: "assets/icons/report.svg" }, { label: 'Project', icon: "assets/icons/project.svg" }]
  isQuickMenuDropdownOpen = false;
  isNotificationsOpen = false;

  selectedOption: string = "My profile";
  User : IUser =  { id: '1', name: 'Mayank S', position: 'Medical Assistant', email: 'mayank.singh@decisionpoint.in', avatar: 'assets/images/avatars/user1.jpg', totalExpenses: 99122 }

  constructor(private notificationService: NotificationService) {
    this.notificationService.getUnreadCount().subscribe(count => {
      this.unreadCount = count;
    });
  }

  toggleDropdown(): void {
    this.isQuickMenuDropdownOpen = !this.isQuickMenuDropdownOpen;
    this.isNotificationsOpen = false; // Close notifications if open
  }

  toggleNotifications(): void {
    this.isNotificationsOpen = !this.isNotificationsOpen;
    this.isQuickMenuDropdownOpen = false; // Close dropdown if open
  }

  onOptionSelect(selectedValue: string) {
    this.selectedOption = selectedValue;
  }
}