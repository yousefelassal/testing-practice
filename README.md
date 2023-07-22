<div align="center">
<a href="https://theodinproject.com/"><img src="https://github.com/yousefelassal/odin-recipes/blob/main/images/top%20logo.png?raw=true" width="300px" height="auto"></a>
<h1>Testing Practice</h1>
<p><a href="https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript">JavaScript</a></p>
<p><a href="https://www.theodinproject.com/lessons/node-path-javascript-testing-practice">Requirements</a></p>

</div>

## Resources
- [Using Matchers](https://jestjs.io/docs/using-matchers) | Jest Docs

  - `toEqual` is used to check the value of an object, it recursively checks every field of an object or array.
    ```js
    test('object assignment', () => {
      const data = {one: 1};
      data['two'] = 2;
      expect(data).toEqual({one: 1, two: 2});
    });
    ```

  - For floating point equality, use `toBeCloseTo` instead of `toEqual`, because you don't want a test to depend on a tiny rounding error.
    ```js
    test('adding floating point numbers', () => {
      const value = 0.1 + 0.2;
      //expect(value).toBe(0.3);           This won't work because of rounding error
      expect(value).toBeCloseTo(0.3); // This works.
    });
    ```

  - You can check strings against regular expressions with `toMatch`:
    ```js
    test('there is no I in team', () => {
      expect('team').not.toMatch(/I/);
    });
    
    test('but there is a "stop" in Christoph', () => {
      expect('Christoph').toMatch(/stop/);
    });
    ```

  [complete list of matchers](https://jestjs.io/docs/expect)

- [Repeating Setup](https://jestjs.io/docs/setup-teardown) | Jest Docs

  - If you have some work you need to do repeatedly for many tests, you can use `beforeEach` and `afterEach` hooks.

    ```js
    beforeEach(() => {
      initializeCityDatabase();
    });
    
    afterEach(() => {
      clearCityDatabase();
    });
    
    test('city database has Vienna', () => {
      expect(isCity('Vienna')).toBeTruthy();
    });
    
    test('city database has San Juan', () => {
      expect(isCity('San Juan')).toBeTruthy();
    });
    ```
    In some cases, you only need to do setup once, at the beginning of a file. This can be especially bothersome when the setup is asynchronous, so you can't do it inline. Jest provides `beforeAll` and `afterAll` hooks to handle this situation.
