import {
  Component,
  OnInit,
  ElementRef,
  ViewChild
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShopingListService } from '../shoping-list.service';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInputRef: ElementRef;

  constructor(private shopingListService: ShopingListService) {}

  ngOnInit() {}
  onAddItem() {
    const ingridientName = this.nameInputRef.nativeElement.value;
    const ingridientAmount = this.amountInputRef.nativeElement.value;
    const newIngridient = new Ingredient(ingridientName, ingridientAmount);
    this.shopingListService.addIngridient(newIngridient);
  }
}
