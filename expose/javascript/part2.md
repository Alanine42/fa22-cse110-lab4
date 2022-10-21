1. Prints `3`, the variable `i` when the above for-loop terminates. `var` variables has function scope so it can be accessed even if it's out of the for-loop. 
2. Prints `150`. The price when you apply discount to the last item in `prices` array. It's declared using `var` in the for-loop so it's accessible in the function.
3. `150`. Rounded value of `150` from Question2. 
4. `[50, 100, 150]`. The array of discounted prices. 
5. ReferenceError! Since we used `let` to define `i`, it's only accessible within the for-loop.
6. ReferenceError! Since we used `let` to define `discountedPrice` inside the for-loop, it's not accessible outside.
7. `150`. It's declared in the function scope and therefore accessible within the function. 
8. `[50, 100, 150]`. The array of discounted prices being returned.
9. Error since `let i` is only accessible within the for-loop.
10. Prints `3`, declared in the function. 
11. `[50, 100, 150]`. The array of discounted prices being returned.

12. Multiple questions
    1. `student.name`
    2. `student['Grad Year']` 
    3. `student.greeting()`
    4. `student['Favorite Teacher'].name`
    5. `student.courseLoad[0]`

13. Arithmetic questions
    1.  `'32'` since 2 is converted to string for concatenation
    2.  `1` a number since '3' is converted to int for subtraction
    3.  `3` because adding null is adding nothing
    4.  `'3null'` since null is converted to literal string `null` then concatenated
    5.  `4` as true is integer 1
    6.  `0` since either false or null are 0
    7.  `'3undefined'` since undefined is converted to literal string `undefined` to concatenate with '3'. 
    8.  `NaN`. '3' is first converted to integer 3, but when subtracted by `undefined`, the result is Not a Number. 

14. Comparison
    1.  `true` since 2 > 1 in number's comparison.
    2.  `false` because '2' is lexically bigger than '12'.
    3.  `true` since they're casted into the same type before comparison.
    4.  `false` since `2` and `'2'` are not the same type
    5.  `false` since `true` evaluates to 1, not 2.
    6.  `true` since `Boolean(2)` returns true, which matches `true` in both types and value.   

15. `==` would cast the variables into the same type before comparing them. On the other hand, `===` only compares variables of the same type --- it returns `false` immediately when they're not the same type. 

16. See [part2-question16.js](part2-question16.js)
17. `[2, 4, 6]`. The callback function `doSomething(num)` returns the doubled input number, and is passed into the function `modifyArray(array, callback)` as the 2nd parameter.  Within the function `modifyArray()`, it utilizes the callback function to double each number in the array and push them into `newArr` to be returned. 
18. See [part2-question18.js](part2-question18.js)
19. The code output (looks like `setTimeout(func, 0)` adds an additional event to execute so that `func` is called after the next line's console log):
```
1
4
3
2
```
*Some actual use of `setTimeout(f, 0)` [here](https://stackoverflow.com/questions/779379/why-is-settimeoutfn-0-sometimes-useful). 
