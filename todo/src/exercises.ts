// Input: fib(4)
// Output: 3
// Explanation: The sequence is [0, 1, 1, 2, 3], so the 4th Fibonacci number is 3.

function fib(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;

    const sequence: number[] = [0, 1];

    for (let i = 2; i <= n; i++) {
        const nextFib = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextFib);
    }

    return sequence[n];
}

console.log(fib(4));  // Output: 3
