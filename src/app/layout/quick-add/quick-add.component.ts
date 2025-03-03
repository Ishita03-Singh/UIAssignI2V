import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-quick-add',
  templateUrl: './quick-add.component.html',
  styleUrls: ['./quick-add.component.scss']
})
export class QuickAddComponent {
  isOpen = false;
  
  menuItems = [
    { icon: 'user', label: 'User' },
    { icon: 'briefcase', label: 'Department' },
    { icon: 'plus-circle', label: 'Advance' },
    { icon: 'file', label: 'Document' },
    { icon: 'folder', label: 'Project' }
  ];
  
  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }
  
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.quick-add-container')) {
      this.isOpen = false;
    }
  }
}