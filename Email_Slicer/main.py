def main():
    print("Welcome to Email Slicer")
    print("")

    email_input = input("Enter your email: ")

    (user_name, domain) = email_input.split("@")
    (deoain, extension) = domain.split(".")

    print("Username :", user_name)
    print("Domain   :", domain)
    print("Extension: ", extension)

while True:
    main()