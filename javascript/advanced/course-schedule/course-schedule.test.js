const canFinish = require('./course-schedule');

describe('Course Schedule', () => {
  test('should return true for numCourses=2, prerequisites=[[1,0]]', () => {
    expect(canFinish(2, [[1,0]])).toBe(true);
  });

  test('should return false for numCourses=2, prerequisites=[[1,0],[0,1]]', () => {
    expect(canFinish(2, [[1,0],[0,1]])).toBe(false);
  });

  test('should handle no prerequisites', () => {
    expect(canFinish(3, [])).toBe(true);
  });

  test('should handle single course', () => {
    expect(canFinish(1, [])).toBe(true);
  });

  test('should handle linear chain', () => {
    expect(canFinish(4, [[1,0],[2,1],[3,2]])).toBe(true);
  });

  test('should detect simple cycle', () => {
    expect(canFinish(3, [[0,1],[1,2],[2,0]])).toBe(false);
  });

  test('should handle complex dependencies', () => {
    expect(canFinish(5, [[1,0],[2,0],[3,1],[3,2],[4,3]])).toBe(true);
  });

  test('should handle self-dependency', () => {
    expect(canFinish(2, [[0,0]])).toBe(false);
  });

  test('should handle multiple independent chains', () => {
    expect(canFinish(6, [[1,0],[2,1],[4,3],[5,4]])).toBe(true);
  });

  test('should handle larger course set', () => {
    expect(canFinish(20, [[0,10],[3,18],[5,5],[6,11],[11,14],[13,1],[15,1],[17,4]])).toBe(false);
  });

  test('should handle zero courses', () => {
    expect(canFinish(0, [])).toBe(true);
  });
});