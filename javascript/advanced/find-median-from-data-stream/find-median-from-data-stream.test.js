const MedianFinder = require('./find-median-from-data-stream');

describe('Find Median from Data Stream', () => {
  test('should handle basic operations', () => {
    const medianFinder = new MedianFinder();
    medianFinder.addNum(1);
    medianFinder.addNum(2);
    expect(medianFinder.findMedian()).toBe(1.5);
    medianFinder.addNum(3);
    expect(medianFinder.findMedian()).toBe(2);
  });

  test('should handle single element', () => {
    const medianFinder = new MedianFinder();
    medianFinder.addNum(5);
    expect(medianFinder.findMedian()).toBe(5);
  });

  test('should handle negative numbers', () => {
    const medianFinder = new MedianFinder();
    medianFinder.addNum(-1);
    medianFinder.addNum(-2);
    expect(medianFinder.findMedian()).toBe(-1.5);
  });

  test('should handle mixed positive and negative', () => {
    const medianFinder = new MedianFinder();
    medianFinder.addNum(-1);
    medianFinder.addNum(1);
    medianFinder.addNum(0);
    expect(medianFinder.findMedian()).toBe(0);
  });

  test('should handle duplicates', () => {
    const medianFinder = new MedianFinder();
    medianFinder.addNum(1);
    medianFinder.addNum(1);
    medianFinder.addNum(1);
    expect(medianFinder.findMedian()).toBe(1);
  });

  test('should handle large dataset', () => {
    const medianFinder = new MedianFinder();
    for (let i = 1; i <= 10; i++) {
      medianFinder.addNum(i);
    }
    expect(medianFinder.findMedian()).toBe(5.5);
  });

  test('should handle alternating pattern', () => {
    const medianFinder = new MedianFinder();
    medianFinder.addNum(10);
    expect(medianFinder.findMedian()).toBe(10);
    medianFinder.addNum(1);
    expect(medianFinder.findMedian()).toBe(5.5);
    medianFinder.addNum(20);
    expect(medianFinder.findMedian()).toBe(10);
    medianFinder.addNum(5);
    expect(medianFinder.findMedian()).toBe(7.5);
  });

  test('should handle zero values', () => {
    const medianFinder = new MedianFinder();
    medianFinder.addNum(0);
    medianFinder.addNum(0);
    expect(medianFinder.findMedian()).toBe(0);
  });
});