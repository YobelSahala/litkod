"""
Climbing Stairs

This problem asks for the number of distinct ways to reach the top of a staircase of n steps, 
given you can take either 1 or 2 steps at a time.

Time Complexity: O(n)
Space Complexity: O(1)
"""


def climb_stairs(n):
    """
    Calculates the number of distinct ways to climb a staircase.

    Args:
      n: The number of steps in the staircase.

    Returns:
      The number of distinct ways to climb to the top.
    """
    if n <= 2:
        return n

    # We only need to store the last two results
    two_steps_before = 1
    one_step_before = 2

    for _ in range(3, n + 1):
        current_ways = one_step_before + two_steps_before
        two_steps_before = one_step_before
        one_step_before = current_ways
        
    return one_step_before