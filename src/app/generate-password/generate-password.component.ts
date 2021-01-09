import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { BlockScopeAwareRuleWalker } from 'tslint';
@Component({
  selector: 'app-generate-password',
  templateUrl: './generate-password.component.html',
  styleUrls: ['./generate-password.component.css']
})
export class GeneratePasswordComponent implements OnInit {
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  password:string = '';
  length = 0;
  ngOnInit(): void {
  }


  onChangeUseLetters() {
    // ! not operator help you if else or toggle 
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  //getting target value from input
  onChangeLength(value:string) {
    //input will give string soo need to parseInt for Integer
    const parsedValue = parseInt(value)
    
    //isNaN(4) return flase(4 is not a number flase,is a number ) so !isNaN(4) return true
    if(!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onButtonClick() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if(this.includeLetters) {
      validChars += letters;
    }
    if(this.includeNumbers){
      validChars += numbers;
    }
    if(this.includeSymbols) {
      validChars += symbols;
    }

    //Generate Random Password Math function
    let generatedPassword = '';
    for(let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length)
      generatedPassword += validChars[index]
    }

    this.password = generatedPassword;
  }














  // generatedPassword = '';
  // randomNumber;
  // randomString : String = '';
  // randomSymbols : String = '';
  // letter:boolean = false;
  // number:boolean = false;
  // symbols:boolean = false;
  // passwordLength;
  // passwordForm = new FormGroup ({
  //   passwordLength : new FormControl(''),
  //   addLetter : new FormControl(''),
  //   addNumber : new FormControl(''),
  //   addSymbols : new FormControl('')
  // })
  // constructor() { }


  // onSubmit() {
  //   let formValue =  this.passwordForm.value ;
  //   this.passwordLength = formValue.passwordLength;
  //   this.letter = formValue.addLetter;
  //   this.number = formValue.addNumber;
  //   this.symbols = formValue.addSymbols;
   
    

  //   if (this.letter && this.number && this.symbols) {
  //     //random Number
  //      this.randomNumber = Math.floor(Math.random() * Math.floor(this.passwordLength));
  //      console.log( this.randomNumber );
  //      this.generatedPassword = 'generate random password'

  //      //random String
  //      let char = 'abcdefghijklmnopqrstuvwxyz'
  //      for (let i = 0; i < this.passwordLength; i++ ) {
  //        let d = Math.floor(Math.random() * i);
        
  //        this. randomString = this.randomString + char[d]
  //        console.log(this.randomString);
  //      }

  //        //random Symbols
  //        let symbols = '!@#$%^&*()'
  //        for (let i = 0; i < this.passwordLength; i++ ) {
  //          let d = Math.floor(Math.random() * i);
  //         console.log(symbols[d])
  //          this. randomSymbols = this.randomSymbols + symbols[d]
  //          console.log(this.randomSymbols);
  //        }
  //   } 
    
  // }

}
