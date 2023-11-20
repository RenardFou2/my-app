import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrl: './business-card.component.css'
})
export class BusinessCardComponent {
  name: string;
  surname: string;
  dateOfBirth: Date;
  interests: string[];
  selected: number;


  constructor() { 
    this.name = 'Joanna';
    this.surname = 'Krupa';
    this.dateOfBirth = new Date('2000-03-18');
    this.interests = ['tennis', 'programming', 'photography'];
    this.selected = -1;
  }

  select(which: number): void {
    this.selected = which;
  }

  save(which: number, newName: string): void {
    this.interests[which] = newName;
  }

  //PD zadanie 2 : Jeśli wcisniesz poza klassami 'all' i 'edit' to input zniknie
  @HostListener('document:click', ['$event'])
  onClick(event: Event): void {
    if (!(event.target as HTMLElement).closest('.all') && !(event.target as HTMLElement).closest('.edit') && !(event.target as HTMLElement).closest('.zad3')) {
      this.selected = -1;
    }
  }

  handleSelectedChange(index: number) {
    this.selected = index;
  }

}
