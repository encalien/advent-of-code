# sample data
# commands = [["forward", "5"], ["down", "5"], ["forward", "8"],
# ["up", "3"], ["down", "8"], ["forward", "2"]]

data_file = open('data.txt', 'r')
commands = [line.strip().split(" ") for line in data_file.readlines()]

print(commands)

depth = 0
horizontalPosition = 0

for command in commands:
    match command[0]:
        case 'forward':
            horizontalPosition += int(command[1])
        case 'down':
            depth += int(command[1])
        case "up":
            depth -= int(command[1])

print(depth * horizontalPosition)
