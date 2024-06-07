//challeng 1 : check if array has subArray of digits summing to target

function hasSubarraySum(arr, target) {
    let left = 0;
    let right = 0;
    let currentSum = 0;
    while (right < arr.length) {
        currentSum += arr[right];

        while (currentSum > target) {
            currentSum -= arr[left];
            left++;
        }
        if (currentSum === target) {
            return true;
        }
        right++;
    }
    return false;
};

// Tests
const arr1 = [4, 2, 7, 1, 9, 5];
const target1 = 17;
console.log(hasSubarraySum(arr1, target1));

const arr2 = [4, 2, 7];
const target2 = 27;
console.log(hasSubarraySum(arr2, target2));
