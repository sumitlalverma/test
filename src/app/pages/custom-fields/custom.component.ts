import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'custom.component.html',
  styleUrls: ['./custom.component.scss'],
})
export class CustomComponent {
  items: any[] = [];

  constructor(private router: Router) {
    this.items = [
      {
        name: 'Location',
      },
      {
        name: 'Organization',
      },
      {
        name: 'Users',
      },
      {
        name: 'Catering',
      },
      {
        name: 'Finance',
      },
      {
        name: 'Events',
      },
    ];
  }

  onRowClick(e: any) {
    this.router.navigate(['/test', e.data.name]);
  }
}
