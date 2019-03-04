/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var i,num=[];
    num[1]=num[0]=1;
    for(i=2;i<=n;i++){
        num[i]=num[i-1]+num[i-2];
    }
    return num[n];
    
};
var n=20;
console.log(climbStairs(n));