import { Component, Input, OnInit } from '@angular/core';

import { FormBuilder, FormArray, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit {
  @Input() name: string;

  bedsArray: Array<{ id: number, displayText: string, bed: number,selected:boolean }> = [];
  roomCount = 5; // This is not fixed.
  roomForm: FormGroup;
  ngOnInit() {

    this.bedsArray.push({ id: 1, bed: 1, displayText: '1 Bed',selected:false });
    this.bedsArray.push({ id: 2, bed: 2, displayText: '2 Beds',selected:false });
    this.bedsArray.push({ id: 3, bed: 3, displayText: '3 Beds',selected:false });

    this.roomForm = new FormGroup({
      rooms: this.genRoomArray(),
      buildingName: new FormControl('Building 1')
    });
  }

  genRoomArray(): FormArray {
    const roomsArray = new FormArray([]);
    for (let i = 0; i < this.roomCount; i++) {
      const roomGroup = new FormGroup({
        roomNo: new FormControl('', Validators.required),
        bedsCount: new FormControl('', Validators.required)
      });

      roomsArray.push(roomGroup);
    }
    return roomsArray;
  }

  onSubmit() {
    console.log(this.roomForm.value);
  }

radioChecked(id, i){
  this.bedsArray.forEach(item=>{
    if(item.id !== id){ 
       item.selected = false;
    }else{
       item.selected = true;
    } 


  })

  console.log(this.bedsArray);
}


}
