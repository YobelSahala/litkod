/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // Create adjacency list and in-degree array
    const adj = Array(numCourses).fill(0).map(() => []);
    const inDegree = new Array(numCourses).fill(0);

    // Build graph
    for (const [course, prereq] of prerequisites) {
        adj[prereq].push(course);
        inDegree[course]++;
    }

    // Initialize queue with courses that have no prerequisites
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    let completedCourses = 0;

    // Process courses using topological sort
    while (queue.length > 0) {
        const course = queue.shift();
        completedCourses++;

        // Process all courses that depend on this course
        for (const nextCourse of adj[course]) {
            inDegree[nextCourse]--;
            if (inDegree[nextCourse] === 0) {
                queue.push(nextCourse);
            }
        }
    }

    // If we completed all courses, there's no cycle
    return completedCourses === numCourses;
};

module.exports = canFinish;