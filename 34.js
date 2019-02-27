var searchRange = function(nums, target) {
    
    var res=[];
    var count=0;
    for(var i=0;i<nums.length;i++){
        if(nums[i]===target){ res.push(i);count++; break;}
    }
    for(var i=nums.length-1;i>=0;i--){
        if(nums[i]===target) {res.push(i);count++; break;}
    }
    if(count==2) return res;
    return [-1,-1]
};
let nums=[1,2,6,6,8];
let target=8;
console.log(searchRange(nums,target));

