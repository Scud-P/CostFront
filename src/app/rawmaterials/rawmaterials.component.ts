import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule


@Component({
  selector: 'app-rawmaterials',
  imports: [CommonModule],
  templateUrl: './rawmaterials.component.html',
  styleUrl: './rawmaterials.component.css'
})
export class RawmaterialsComponent {
  rawMaterials = [
    { name: 'Material 1', quantity: 10, price: 100 },
    { name: 'Material 2', quantity: 20, price: 200 },
    { name: 'Material 3', quantity: 15, price: 150 },
    { name: 'Material 4', quantity: 30, price: 300 }
  ];
}
