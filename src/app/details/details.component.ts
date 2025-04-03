import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  moveToNext(event: any) {
    event.preventDefault(); // Prevent default Enter key behavior

  const inputs = Array.from(document.querySelectorAll<HTMLElement>('.field'));
  const index = inputs.indexOf(event.target as HTMLElement);

  if (index !== -1 && index < inputs.length - 1) {
    inputs[index + 1].focus();
  } else if (index === inputs.length - 1) {
    // After the last button, go back to the first field
    inputs[0].focus();
  }
}

}
