const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let n = Number(input[0]);
    let arr = input.slice(1, n + 1);
    const commands = arr.map((item) => item.trim().split(' ')[0]);

    let stack = [],
        answer = [];

    for (let i = 0; i<commands.length; i++) {
        switch (commands[i]) {
            case 'push':
                let num = Number(arr[i].split(' ')[1]);
                stack.push(num);
                break;
            case 'pop':
                let pop = stack.length === 0 ? -1 : stack[stack.length - 1];
                stack.pop();
                answer.push(pop);
                break;
            case 'size':
                answer.push(stack.length);
                break;
            case 'empty':
                answer.push(stack.length === 0 ? 1 : 0);
                break;
            case 'top':
                let top = stack.length === 0 ? -1 : stack[stack.length - 1];
                answer.push(top);
                break;
        }
    }

    return answer.join('\n');
}

console.log(solution(input));
