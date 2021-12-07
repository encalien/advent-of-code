# sample data
# fish_ages = [3, 4, 3, 1, 2]

data_file = open('data.txt', 'r')
fish_ages = [int(num) for num in data_file.readline().strip().split(',')]

fish_count = {age: fish_ages.count(age) for age in fish_ages}

for day in range(256):
    new_fish_count = {}
    for age in fish_count:
        new_fish_count[age - 1] = fish_count[age]
    if -1 in new_fish_count:
        new_fish_count[8] = new_fish_count[-1]
        if 6 in new_fish_count:
            new_fish_count[6] += new_fish_count[-1]
        else:
            new_fish_count[6] = new_fish_count[-1]
        del new_fish_count[-1]
    fish_count = new_fish_count

counter = 0
for age in fish_count:
    counter += fish_count[age]
print(counter)
