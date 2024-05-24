import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenubarModule, NgIf, NgFor],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  constructor(private router: Router) {}

  items: MenuItem[] = [];
  ngOnInit(): void {
    this.items = [
      
    {
        label: 'Dashboard',
        icon: 'pi pi-link',
        command: () => {
            this.router.navigate(['/dashboard']);
        }
    },
    {
        label: 'Alert',
        icon: 'pi pi-link',
        command: () => {
            this.router.navigate(['/alert']);
        }
    }
    ];
  }
}
