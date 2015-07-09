var maxValueI = function(){
  var arr = [2,7,8,3,1,4];
  var max = arr[0];
  for (var i = 1; i < arr.length; i++){
    if (arr[i] > max){
      max = arr[i];
    }
  }
  return max;
};

var maxValueR = function(list, max){
  var max = max || 0;
  if (list.length < 1){
    return max;
  }
  if (list[0] > max){
    max = list[0];
  }
  return maxValueR(list.slice(1), max);
};