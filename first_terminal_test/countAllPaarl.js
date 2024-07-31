export default function countAllPaarl(registrationNumber) {
    const regNumber_array = registrationNumber.split(',').map(regNumber=>regNumber.trim());
      let count = 0;
    for(let i = 0; i < regNumber_array.length; i++) {
      if(regNumber_array[i].startsWith('CJ')){
        count++;
      }
    }
    return count;
  }