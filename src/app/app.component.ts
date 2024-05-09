import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { title } from 'process';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  noteIsbeingEdited = {
    flag: false,
    noteIndex: -1
  };
  tempTitle = "";
  tempDescription = "";
  notes = [
    {
      title: "Example 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      isSelected: false
    },
    {
      title: "Example 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      isSelected: false
    },
    {
      title: "Example 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      isSelected: false
    },
    {
      title: "Example 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      isSelected: false
    },
    {
      title: "Example 5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      isSelected: false
    }
  ]
  public selectNote(noteIndex){
    for(let i = 0; i < this.notes.length; i++){
      this.notes[i].isSelected = false
    }
    this.notes[noteIndex].isSelected = true
  }
  public saveNote(){
    if(this.tempDescription.length < 7 || this.tempTitle.length < 5){
      return
    }
    if(this.noteIsbeingEdited.flag){
      this.noteIsbeingEdited.flag = false
      this.notes[this.noteIsbeingEdited.noteIndex].title = this.tempTitle
      this.notes[this.noteIsbeingEdited.noteIndex].description = this.tempDescription
    }
    else{
      this.notes[this.notes.length] = {
        title: this.tempTitle, 
        description: this.tempDescription, 
        isSelected: false
      }
    }
    this.tempTitle === undefined ?  "" : this.tempTitle = "", 
    this.tempDescription === undefined ? "" : this.tempDescription = ""
  }
  public saveTitle(input){
    this.tempTitle = input.target.value
  }
  public saveDescription(input){    
    this.tempDescription = input.target.value
    console.log(this.tempDescription)
  }
  public deleteNote(){
    for(let i = 0; i < this.notes.length; i++){
      if(this.notes[i].isSelected){
        this.notes[i].isSelected = false;
        this.notes.splice(i, 1) ;
        return;
      }
    }
  }
  public editNote(){
    for(let i = 0; i < this.notes.length; i++){
      if(this.notes[i].isSelected){
        this.noteIsbeingEdited = {
          flag: true,
          noteIndex: i
        }
        this.tempTitle = this.notes[i].title
        this.tempDescription = this.notes[i].description
      }
    }
  }
}
