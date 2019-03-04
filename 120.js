/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    var result=0;
    var len=triangle.length;
    if(len===0){result=0;}
    if(len===1){result=triangle[0][0];}
    sum=triangle[len-1];
    for (var i=len-2;i>=0;i--){
        for(var j=0;j<=triangle[i].length;j++){
            var sum1=triangle[i][j]+sum[j];
            var sum2=triangle[i][j]+sum[j+1];
            sum[j]=Math.min(sum1,sum2);
        }
    }
    result=sum[0];
    return result;
};
var triangle=[
    [2],
   [3,4],
  [6,5,7],
 [4,1,8,3]
];
console.log(minimumTotal(triangle));



