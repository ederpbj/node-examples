export const fatorial = (num) => {7
    if(num === 0) {
        return 1
    }

    return num * fatorial (num-1)
}