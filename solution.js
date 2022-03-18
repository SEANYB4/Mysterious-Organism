// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

let i = Math.floor((Math.random()*15));

console.log(i);

function pAequorFactory(num, array){

  let organism = {

    specimenNum: num,
    dna: array,
    mutate(){
    let index = Math.floor((Math.random()*15));
    let base = this.dna[index];
    
    if(base==='A'){
      base='T';
    } else if(base==='T'){

       base='C';
    }
     
     else if(base==='C'){
        base='G';
     }

     else if(base==='G'){
        base='A';
     }
     
     this.dna[index] = base;
     console.log("DNA at index " + index + " changed to " + base);
    
  },
  compareDNA(organism){
    
    let percentage = 0;
    let count = 0;
    
    for(let i = 0; i < this.dna.length; i++) {

      if(this.dna[i] === organism.dna[i]){

        count++;

      }

      percentage = count/15 * 100;



    }

        console.log("Specimen number " + this.specimenNum + " and specimen number " + organism.specimenNum + " share " + percentage + "% of their DNA in common.")
  },

  willLikelySurvive(){

    let count = 0;
    let percentage = 0;
    for(let i=0; i<this.dna.length; i++){

    if(this.dna[i]==='C' || this.dna[i]==='G'){
        count++;

      }
    }

    percentage = (count/this.dna.length)*100

    if(percentage => 60){
      return true;
    }
    else{

      return false;
    }
    

  
  }



}
return organism;

}

let dnaStrand1 = mockUpStrand();
let dnaStrand2 = mockUpStrand();
let dnaStrand3 = mockUpStrand();

let org1 = pAequorFactory(1, dnaStrand1);
let org2 = pAequorFactory(2, dnaStrand2);
let org3 = pAequorFactory(3, dnaStrand3);

console.log(org1.dna);

org1.mutate();

console.log(org1.dna);

org1.compareDNA(org2);

org1.compareDNA(org3);


console.log(org3.willLikelySurvive());

let survivors = [];
let count = 1;
while (survivors.length<30){


let specimen = pAequorFactory(count, mockUpStrand());

if(specimen.willLikelySurvive()){
  survivors.push(specimen);
}

count++;



}

console.log(survivors);

