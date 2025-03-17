import { Component, OnInit } from '@angular/core';

interface Reimbursement {
  date: string;
  category: string;
  username: string;
  userAvatar: string;
  department: string;
  lastUpdate: string;
  status: string;
  amount: string;
  description: string;
}


@Component({
  selector: 'app-reimbursement',
  templateUrl: './reimbursement.component.html',
  styleUrls: ['./reimbursement.component.scss']
})
export class ReimbursementComponent implements OnInit {
  activeTab: string = 'All';
  currentPage: number = 1;
  totalPages: number = 30;
  searchTerm: string = '';

  reimbursements: Reimbursement[] = [
    {
      date: '10/03/2020',
      category: 'Games',
      username: 'Brad Pinkney',
      userAvatar: 'assets/images/avatars/user1.jpg',
      department: 'Administration',
      lastUpdate: '25/03/2020',
      status: 'Screening',
      amount: '1,495',
      description: 'Indoor game with referral team'
    },
    {
      date: '19/03/2020', 
      category: 'Hotel',
      username: 'Hannah Stevens',
      userAvatar: 'assets/images/avatars/user2.jpg',
      department: 'Product',
      lastUpdate: '23/03/2020',
      status: 'Rejected',
      amount: '873.00',
      description: 'Client meeting in Amelia Hotel'
    },
    {
      date: '18/03/2020', 
      category: 'Equipment',
      username: 'Aaron Kumar',
      userAvatar: 'assets/images/avatars/user3.jpg',
      department: 'Management',
      lastUpdate: '25/03/2020',
      status: 'Screening',
      amount: '5,856',
      description: 'Office vehicle for team use'
    },
    {
      date: '05/03/2020', 
      category: 'Car rent',
      username: 'Kira Henderson',
      userAvatar: 'assets/images/avatars/user4.jpg',
      department: 'Marketing',
      lastUpdate: '08/03/2020',
      status: 'Approved',
      amount: '12,201',
      description: 'Business meeting to office'
    },
    {
      date: '27/02/2020', 
      category: 'Food',
      username: 'Mathilda Jackson',
      userAvatar: 'assets/images/avatars/user5.jpg',
      department: 'Sales',
      lastUpdate: '02/03/2020',
      status: 'Archived',
      amount: '7,743',
      description: 'Business lunch with office'
    },
    {
      date: '23/02/2020', 
      category: 'General needs',
      username: 'Max Kim',
      userAvatar: 'assets/images/avatars/user6.jpg',
      department: 'Product',
      lastUpdate: '25/03/2020',
      status: 'Screening',
      amount: '12,036',
      description: 'Conference supplies'
    },
    {
      date: '16/04/2020', 
      category: 'Travel',
      username: 'Nigel Olins',
      userAvatar: 'assets/images/avatars/user7.jpg',
      department: 'Finances',
      lastUpdate: '23/03/2020',
      status: 'Paid',
      amount: '62,670',
      description: 'Trip to Madrid for business conference'
    },
    {
      date: '23/01/2020', 
      category: 'Fashion',
      username: 'Maya Stone',
      userAvatar: 'assets/images/avatars/user8.jpg',
      department: 'Customer Service',
      lastUpdate: '05/02/2020',
      status: 'Paid',
      amount: '3,527',
      description: 'Clothing purchase for upcoming event'
    },
    {
      date: '20/01/2020', 
      category: 'Equipment',
      username: 'Kevin Gomez',
      userAvatar: 'assets/images/avatars/user9.jpg',
      department: 'Engineering',
      lastUpdate: '25/03/2020',
      status: 'Approved',
      amount: '18,320',
      description: 'Purchase of new computer for team member'
    },
    {
      date: '14/02/2020', 
      category: 'Food',
      username: 'Maya Noah',
      userAvatar: 'assets/images/avatars/user1.jpg',
      department: 'Management',
      lastUpdate: '23/03/2020',
      status: 'Archived',
      amount: '2,504',
      description: 'Business lunch with office'
    },
    {
      date: '12/02/2020', 
      category: 'Taxi',
      username: 'Georgia O\'Hale',
      userAvatar: 'assets/images/avatars/user2.jpg',
      department: 'Administration',
      lastUpdate: '15/02/2020',
      status: 'Paid',
      amount: '67.22',
      description: 'Taxi home after'
    },
    {
      date: '29/01/2020', 
      category: 'Electricity',
      username: 'Asya Sharma',
      userAvatar: 'assets/images/avatars/user3.jpg',
      department: 'Human Resources',
      lastUpdate: '08/02/2020',
      status: 'Rejected',
      amount: '13,478',
      description: 'Electricity bill for one month'
    },
    {
      date: '30/04/2020', 
      category: 'Food',
      username: 'Jonathan Kovari',
      userAvatar: 'assets/images/avatars/user4.jpg',
      department: 'Customer Service',
      lastUpdate: '23/03/2020',
      status: 'Applied',
      amount: '37,437',
      description: 'Business lunch with office'
    },
    {
      date: '22/03/2020', 
      category: 'WordPress',
      username: 'Pippa Foster',
      userAvatar: 'assets/images/avatars/user5.jpg',
      department: 'Administration',
      lastUpdate: '08/02/2020',
      status: 'Approved',
      amount: '160.50',
      description: 'WordPress theme plan'
    },
    {
      date: '03/02/2020', 
      category: 'Trip',
      username: 'Dibyendu Yadav',
      userAvatar: 'assets/images/avatars/user6.jpg',
      department: 'Engineering',
      lastUpdate: '08/02/2020',
      status: 'Archived',
      amount: '3,470',
      description: 'Trip to Chennai for business conference'
    }
  ];

  filteredReimbursements: Reimbursement[] = [];

  ngOnInit(): void {
    this.filteredReimbursements = [...this.reimbursements];
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
    // In a real app, this would filter based on tab
    this.filteredReimbursements = [...this.reimbursements];
  }

  search(): void {
    if (!this.searchTerm.trim()) {
      this.filteredReimbursements = [...this.reimbursements];
      return;
    }
    
    const term = this.searchTerm.toLowerCase();
    this.filteredReimbursements = this.reimbursements.filter(item => 
      item.description.toLowerCase().includes(term) ||
      item.username.toLowerCase().includes(term) ||
      item.department.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term)
    );
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'approved': return 'status-approved';
      case 'rejected': return 'status-rejected';
      case 'screening': return 'status-screening';
      case 'paid': return 'status-paid';
      case 'archived': return 'status-archived';
      case 'applied': return 'status-applied';
      default: return '';
    }
  }
}