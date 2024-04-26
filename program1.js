function smallestMissingPositiveInteger(nums) {
  const numSet = new Set(nums);

  let smallestMissing = 1;

  // Iterate until the smallest missing positive integer is found
  while (numSet.has(smallestMissing)) {
      smallestMissing++;
  }

  return smallestMissing;
}

module.exports = smallestMissingPositiveInteger;

