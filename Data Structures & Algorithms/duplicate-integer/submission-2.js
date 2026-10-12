class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const n= new Set();
        for(let i of nums){
            if(n.has(i)){
                return true;
            }
            n.add(i);
        }
        return false;
    }
}
