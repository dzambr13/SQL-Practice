temperature = 25

if temperature > 30:
    print("It's a hot day")
    print("Drink plent of water")
elif temperature > 20:
    # (20, 30], this means between 20 and greater or equal to 30
    print("It's a nice day")
elif temperature > 10:
    print("It's a bit cold")
else:
    print("It's cold")
print("Done")
