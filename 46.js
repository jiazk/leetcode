/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    var res=new Set();
    var curr=new Set();
    backtrack(res,curr,nums)
    return [...res];
};
var backtrack=function(res,curr,nums){
    if(nums.length===curr.size){ 
        res.add([...curr]);
    }else{
        for(var i=0;i<nums.length;i++){
            if(curr.has(nums[i])) continue;
            curr.add(nums[i]);
            backtrack(res,curr,nums);
            curr.delete(nums[i]);
        }
    }
}
var nums=[1,2,3];
console.log(permute(nums));