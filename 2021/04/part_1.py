data_file = open('data.txt', 'r')
numbers_stream = [int(num) for num in data_file.readline().split(',')]
bingo_raw_data = [line.strip() for line in data_file.readlines()][1:]
bingo_boards = []

for index, line in enumerate(bingo_raw_data):
    if index % 6 == 0:
        new_board = {'lines': [], 'columns': [[], [], [], [], []]}
    if index % 6 != 5:
        new_line = [int(num.strip()) for num in line.split()]
        for index, num in enumerate(new_line):
            new_board['columns'][index].append(num)
        new_board['lines'].append(new_line)
    if len(new_board['lines']) == 5:
        bingo_boards.append(new_board)

current_stream = numbers_stream[:5]


def set_winner():
    i = 5
    while True:
        for index, bingo in enumerate(bingo_boards):
            for line in bingo['lines']:
                if all((num in current_stream) for num in line):
                    return bingo
            for column in bingo['columns']:
                if all((num in current_stream) for num in column):
                    return bingo
        current_stream.append(numbers_stream[i])
        i += 1


winner = set_winner()

sum_of_unmarked_numbers = 0
for line in winner['lines']:
    for num in line:
        sum_of_unmarked_numbers += num if not num in current_stream else 0

print(sum_of_unmarked_numbers * current_stream[-1])
