# Exercise 1

Write a script, call it `helloworld.js`, when run with node, it should simple log out `hello world`
​

# Exercise 2

Write a script, call it `names.js`. In the script, create an array with 6 groceries. Run the script with node, it should simple log out a text and the six groceries

```
Your grocerie list:
Count of groceries: 6
grocery1
grocery2
grocery3
grocery4
grocery5
grocery6
```

​

# Exercise 3

Write a script, call it addition.js. When calling the script, pass two argument (numbers), the script should calculate the addition and console.log the result.
​
Example (run the script)

```
node addition.js 5 6
```

Example (expected console.log)

```
The result is 11
```

​

# Exercise 3.1

What happens, if you just pass one argument, for example just one number? Try to prevent an error.
​

# Exercise 3.2

What happens, if you just pass a Name, like "Martin" instead of a number? Try to prevent an error.
​

# Exercise 4

Create a `text.txt` file with the following content (copy the following line for easy use)
​

```
Doro, Frank, Jerika, Julia, Luiz, Marc, Nazar, Patrick, Sergej, Stefan, Tunay, Vladislav
```

​
Create a script that loads the `text.txt` file into the script and console.log it out
​
Read more [here](https://nodejs.dev/en/learn/reading-files-with-nodejs/) about the `fs` module in `node`
​
​

# Exercise 5

​
Go to GitHub and learn about `learnyournode`. https://github.com/workshopper/learnyounode
Read the Readme carefully and install the app and do exercise 1 to 4.
​

# Bonus

​
Write a script that excepts an argument when called with node. (This should be a number). Console.log if the number is even or odd.
​
Example

```
node oddOrEven.js 5 // should console.log The number 5 is odd
```

​

# Extra Super Bonus

​
Write a script that when called it console.logs the number 1 to 100. Everytime the displayed number can be divided by 3 it should console.log `neue`. If the number can be divided by 5 it should console.log `fische`. If the number is divided by 3 and 5, it should console.log `neuefische
​
Example

```
node foobar.js // when called, should render the following:
1
2
neue
4
fische
neue
7
8
neue
fische
11
neue
13
14
neuefische
16
17
neue
19
... and so on
```
