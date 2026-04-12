n = int(input("Enter n: "))

for i in range(n):
    for j in range(n):
        # First column OR diagonal OR last column
        if j == 0 or j == n-1 or j == i:
            print("*", end="")
        else:
            print(" ", end="")
    print()