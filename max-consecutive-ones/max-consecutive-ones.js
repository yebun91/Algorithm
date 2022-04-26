/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let result = 0;
    let sum = 1;
    for(let i=0; i<nums.length; i++){
        if(nums[i] == 1){
            if(result==0){
                result = 1;
            }
            if(nums[i+1] == 1){
                sum += 1;
                if(result<sum){
                    result = sum;
                }
            }else{
                if(result<sum){
                    result = sum;
                }
                sum = 1;
            }
        }
    }
    return result;
};