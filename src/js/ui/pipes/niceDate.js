export function niceDatePipe(input = new Date()) {
    return (new Date(input)).toLocaleDateString()
}