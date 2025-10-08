def find_duplicates(nums):
    seen, dup = set(), set()
    for n in nums:
        if n in seen:
            dup.add(n)
        else:
            seen.add(n)
    return list(dup)

print(find_duplicates([1, 2, 3, 2, 4, 5, 1, 6]))
