/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var nums=[1,2,3,4];
var permuteUnique2 = function(nums) {
    var result = [], visited = {};
    getPermute(0);
    return result;

    function getPermute(index){
        if(index === nums.length){
            var id = nums.join('#');
            if(!visited[id]){
                result.push(nums.slice(0));

                visited[id] = true;
            }
            return;
        }
        for(var i = index; i < nums.length; i++){
            switchNum(i, index);
            getPermute(index + 1);
            switchNum(i, index);
        }
    }
    function switchNum(i, j){
        if(i === j) return;
        var tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
};