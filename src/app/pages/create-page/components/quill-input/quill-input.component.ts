import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quill-input',
  templateUrl: './quill-input.component.html',
  styleUrls: ['./quill-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuillInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}