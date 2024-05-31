# express-async-error-handling

There are two routes to test error handling behavior

- GET /non-async-error
- GET /async-error

![Screenshot 2023-09-22 at 3 16 59 PM](https://github.com/bterone/express-async-error-handling/assets/34730459/ec5d7d3b-67ed-42f3-b9f2-aa84b38f8cac)

Calling `/async-error` keeps the request pending indefintely

![Screenshot 2023-09-22 at 3 28 01 PM](https://github.com/bterone/express-async-error-handling/assets/34730459/9ca60744-3b77-4a04-809f-0befefbd6de1)

Using `process.on` we can catch `unhandledRejection` and handle accordingly

```js
process.on('unhandledRejection', (x) => {
  console.log(x.stack);
});
```
