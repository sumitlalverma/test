import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: 'tabs-and-form.component.html',
  styleUrls: ['./tabs-and-form.component.scss'],
})
export class TabsAndForm {
  name: any = '';
  imageUrl = 'https://placekitten.com/300/200';
  selectedTabIndex: any = 1;

  form: any = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    category: new FormControl('')
  });

  categories = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' }
  ];

  tabs = [
    { title: 'Tab 1', content: 'Content for tab 1' },
    { title: 'Tab 2', content: 'Content for tab 2' },
    { title: 'Tab 3', content: 'Content for tab 3' },
  ];

  constructor(private route: ActivatedRoute) {
    this.name = this.route.snapshot.paramMap.get('testName');
  }

  save() {
    console.log(this.form.value);
  }
}
