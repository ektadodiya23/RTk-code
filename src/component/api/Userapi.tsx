// This is a fake Api from {  npm install chance  } = package..
import Chance from 'chance' ; 

const chance = Chance();

 export  const fakeUserdata = () =>{
   return chance.name({ middle: true });
} ; 

fakeUserdata();