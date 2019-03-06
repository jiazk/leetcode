/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {   
    var len= nums.length;
    if(len===0){
        return 0;
    } 
    var result=nums[0];
    var max=nums[0];
    var min=nums[0];
    var maxtemp=0;
    var mintemp=0;
    var i;
    for(i=1;i<len;i++){
        maxtemp=Math.max(max*nums[i],min*nums[i]);
        mintemp=Math.min(max*nums[i],min*nums[i]);
        max=Math.max(maxtemp,nums[i]);
        min=Math.min(mintemp,nums[i]);
        result=Math.max(result,max);
    }
    return result;   
};
var nums=[2,5];
console.log(maxProduct(nums));