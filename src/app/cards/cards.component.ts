import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent implements OnInit {
  constructor() { }
  courseExpandCode = false;
  cards = [
    {
      title: 'Jugs and Mugs_Bunny and Banno celebrate their Wedding Anniversary',
      type: 'course',
      subject: 'Maths',
      medium: 'English',
      class: 'VII',
      topic: 'Global positioning system and its application',
      subtopic: 'Limits of artificial intelligence',
      img: 'assets/images/book.png',
      org: 'CBSE',
      category: 'Book'
    },
    {
      title: 'बाल महाभारत कथा',
      type: 'course',
      subject: 'Subject Name',
      medium: 'Medium Name',
      class: 'Class Name',
      topic: 'Global positioning system and its application',
      subtopic: 'Limits of artificial intelligence',
      img: 'assets/images/book.png',
      org: 'Academy of European Law (ERA)',
      category: 'Book'
    },
    {
      title: 'Data Structure and Algorithm - Assignment 1 Paperback',
      type: 'course',
      subject: 'Subject Name',
      medium: 'Medium Name',
      class: 'Class Name',
      topic: 'Global positioning system and its application',
      subtopic: 'Limits of artificial intelligence',
      img: 'assets/images/book.png',
      org: 'Academy of European Law (ERA)',
      category: 'Book'
    },
    {
      title: 'Data Structure and Algorithm - Assignment 1 Paperback',
      type: 'course',
      subject: 'Subject Name',
      medium: 'Medium Name',
      class: 'Class Name',
      topic: 'Global positioning system and its application',
      subtopic: 'Limits of artificial intelligence',
      img: 'assets/images/book.png',
      org: 'Academy of European Law (ERA)',
      category: 'Book'
    }
  ];

  courseCardCode = `
  <sb-card
    type="course"
    title="Data Structure and Algorithm - Assignment 1 Paperback"
    subject="Subject Name"
    medium="Medium Name"
    class="Class Name"
    topic="Global positioning system and its application"
    subtopic="Limits of artificial intelligence"
    img="assets/images/book.png"
    org="Academy of European Law (ERA)"
    category="Book"
  ></sb-card>`;

  ngOnInit() {
  }

}



