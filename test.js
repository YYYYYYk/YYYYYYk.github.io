var singleNumber = function(nums) {
  const copyNums = JSON.parse(JSON.stringify(nums))
  for (let i=0; i< nums.length; i++) {
      copyNums.splice(i, 1)
      const index = copyNums.findIndex(item => item === nums[i])
      console.log(index, i,nums, nums[i], copyNums)
      if (index > -1) {
          copyNums.splice(i, 1)
      } else {
          return nums[i]
      }
  }
}
singleNumber([2,2,3,2])

function parseRange(str) {
    const match = str.match(/^(\d+)([^\d]+)(\d+)$/);
    return match;
  }
  console.log(parseRange('1-100'))
`                                                                        `
  var str = "The1 rai222n in Spain stays mainly in the plain"; 
var res = str.match(/\d+/g);
console.log(res)