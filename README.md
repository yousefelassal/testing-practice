<div align="center">
<a href="https://theodinproject.com/"><img src="https://github.com/yousefelassal/odin-recipes/blob/main/images/top%20logo.png?raw=true" width="300px" height="auto"></a>
<h1>Testing Practice</h1>
<p><a href="https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript">JavaScript</a></p>
<p><a href="https://www.theodinproject.com/lessons/node-path-javascript-testing-practice">Requirements</a></p>

</div>

## Resources
- [Using Matchers](https://jestjs.io/docs/using-matchers) | Jest Docs

  `toEqual` is used to check the value of an object, it recursively checks every field of an object or array.
  ```js
  test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });
  ```
