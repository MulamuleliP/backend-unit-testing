export default function countAllFromTown(registrationNumber) {
    const regNumbersArray = registrationNumber.split(',');
    const fromStellies = [];
    let count = 0;
    for (let i = 0; i < regNumbersArray.length; i++) {
      if (regNumbersArray[i].startsWith('CL')) {
        count++;
      }
    }
    return count;
  }