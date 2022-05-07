import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css'],
})
export class LikeButtonComponent implements OnInit {
  public initialCount = 100;

  counter = 0;
  isLiked = false;

  ngOnInit() {
    this.counter = this.initialCount;
  }

  setButtonClasses() {
    let classes = {
      liked: this.isLiked,
    };
    return classes;
  }

  likeTheButton = () => {
    if (this.isLiked) this.decreaseCounter();
    else this.increateCounter();

    this.isLiked = !this.isLiked;
  };

  increateCounter = () => {
    this.counter++;
  };

  decreaseCounter = () => {
    this.counter--;
  };
}
