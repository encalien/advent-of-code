# sample data
# fish_ages = [3, 4, 3, 1, 2]

data_file = open('data.txt', 'r')
fish_ages = [int(num) for num in data_file.readline().strip().split(',')]

for day in range(80):
    for index in range(len(fish_ages)):
        fish_ages[index] -= 1
        if fish_ages[index] == -1:
            fish_ages[index] = 6
            fish_ages.append(8)

print(len(fish_ages))
