const uniqSort = function(arr){
  const breadcrumbs = {};
  
  return arr.filter((num)=> !breadcrumbs[num] ? breadcrumbs[num] = num : false).sort((a,b) => a - b);
}

uniqSort([4,2,2,3,2,2]);