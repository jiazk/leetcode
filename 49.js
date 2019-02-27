var griddle=[];
var result=[];
var groupAnagrams = function(strs) {
griddle=new Map();
result=[];
for(var str in strs){
    var key=Array.from(strs[str]).sort().join();
    if(griddle.has(key)){
        griddle.get(key).push(strs[str])
    }else{
        griddle.set(key,[strs[str]]);
    }
}
griddle.forEach((e,i,m)=>{result.push(e)});
return result;
    
};
strs=["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));