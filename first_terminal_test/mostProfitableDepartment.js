export default function mostProfitableDepartment(salesData) { 
    const totalsByDepartment = {};
    salesData.forEach(item => { 
      if (!totalsByDepartment[item.department]) {
        totalsByDepartment[item.department] = 0;
      } totalsByDepartment[item.department] += item.sales; }); 
    let maxSales = 0; 
    let mostProfitable = ''; 
    for (const department in totalsByDepartment) {
      if (totalsByDepartment[department] > maxSales) { maxSales = totalsByDepartment[department]; mostProfitable = department; 
                                                     } 
    } 
    console.log(mostProfitable) 
    return mostProfitable; 
  } 
  function mostProfitableDay(salesData) { 
      const totalsByDay = {};
      salesData.forEach(item => { if (!totalsByDay[item.day]) { 
        totalsByDay[item.day] = 0; } totalsByDay[item.day] += item.sales; }); 
      let maxSales = 0; let mostProfitableDay = ''; 
      for (const day in totalsByDay) { 
        if (totalsByDay[day] > maxSales) { 
          maxSales = totalsByDay[day]; 
          mostProfitableDay = day; 
        } 
      } 
      console.log(mostProfitableDay) 
      return mostProfitableDay; 
    }