import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { ThemeMode } from '../../core/constants/theme.constants';
import { filter, Observable } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent {
  @Input() isDarkTheme: boolean = true;
  @Input() companyName: string = 'Company Name';
  theme$: Observable<ThemeMode>;
  
  @Output() themeChange = new EventEmitter<boolean>();
  @Output() menuItemSelected = new EventEmitter<number>();
  
  menuItems = [
    { icon: 'assets/icons/dashboard.svg', label: 'Dashboard', route: '/dashboard', active: true },
    { icon: 'assets/icons/user-group.svg', label: 'Users', route: '/users' },
    { icon: 'assets/icons/reimbursement.svg', label: 'Reimbursement', route: '/reimbursement' },
    { icon: 'assets/icons/wallet.svg', label: 'Advances', route: '/advances' },
    { icon: 'assets/icons/report.svg', label: 'Reports', route: '/reports' },
    { icon: 'assets/icons/analytics.svg', label: 'Analytics', route: '/analytics' },
    { icon: 'assets/icons/setting.svg', label: 'Settings', route: '/settings' }
  ];
  
  constructor(private themeService: ThemeService,private router: Router) {
    this.theme$ = this.themeService.theme$;
  }
  ngOnInit(){
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.selectMenuItemRoute(event.url);
      });
  }
  
  selectMenuItemRoute(currentRoute: string) {
    this.menuItems.forEach(item => {
      item.active = item.route === currentRoute; 
    });
  }
  selectMenuItem(index: number): void {
    this.menuItems.forEach((item, i) => {
      item.active = i === index;
    });
    this.menuItemSelected.emit(index);
  }
  toggleTheme(isDark: boolean): void {
    this.isDarkTheme = isDark;
    this.themeChange.emit(isDark);
  }
}