import { FoodComponent } from './food.component';
import { FoodItem } from '../model/food-item.model';
import { of } from 'rxjs';
import { FoodService } from '../foodService/food.service';

describe('FoodComponent:', () => {
  let comp: FoodComponent;
  let mockFS: FoodService;

  const foodData: FoodItem[] = [
    { name: 'Pad Thai', rating: 5 },
    { name: 'Butter Chicken', rating: 5 },
    { name: 'Cannelloni', rating: 4 },
    { name: 'Cordon Bleu', rating: 2 },
  ];

  const serviceResult = [
    { name: 'Pad Thai', rating: 5 },
    { name: 'Butter Chicken', rating: 5 },
    { name: 'Cannelloni', rating: 4 },
  ];

  beforeEach(() => {
    mockFS = jasmine.createSpyObj(['getItems', 'deleteItem']);
    comp = new FoodComponent(mockFS);
  });

  it('removes the item from the list', () => {
    comp.food = foodData;
    //TODO: Find deleteItem.and.returnValue
    // mockFS.deleteItem.and.returnValue(of(serviceResult));
    comp.deleteFood(foodData[2]);

    expect(comp.food.length).toBe(3);
  });

  it('should call deleteItem', () => {
    comp.food = foodData;
    // mockFS.deleteItem.and.returnValue(of(serviceResult));

    comp.deleteFood(foodData[3]);
    expect(mockFS.deleteItem).toHaveBeenCalledWith(foodData[3]);
  });
});
