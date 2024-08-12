import { User } from "../../../domain/entities/User";

describe("User", () => {
    it("should create a new user", () => {
        const user = new User(
            "22as-2as2-2as2-1as2",
            "Carlos",
            "carlos@gmail.com",
            "9d8a4sd94a9sd4a9sd4a9d4qwrqwrafadghqwe4q88q8",
            ["Teacher"],
            new Date(),
            new Date()
        );

        expect(user.getUuid()).toBe("22as-2as2-2as2-1as2");
        expect(user.getUsername()).toBe("Carlos");
        expect(user.getEmail()).toBe("carlos@gmail.com");
        expect(user.getPassword()).toBe("9d8a4sd94a9sd4a9sd4a9d4qwrqwrafadghqwe4q88q8");
        expect(user.getRoles()).toEqual(["Teacher"]);
    });

    it("should update user", () => {
        const user = new User(
            "uuid",
            "username",
            "email",
            "password",
            ["role"],
            new Date(),
            new Date()
        );

        user.setUuid("new-uuid");
        user.setUsername("new-username");
        user.setEmail("new-email");
        user.setPassword("new-password");
        user.setRoles(["new-role"]);

        expect(user.getUuid()).toBe("new-uuid");
        expect(user.getUsername()).toBe("new-username");
        expect(user.getEmail()).toBe("new-email");
        expect(user.getPassword()).toBe("new-password");
        expect(user.getRoles()).toEqual(["new-role"]);
    });

    it("should test getters and setters", () => {
        
        const user = new User(
            "uuid",
            "username",
            "email",
            "password",
            ["role"],
            new Date(),
            new Date()
        );

        user.setUuid("new-uuid");
        user.setUsername("new-username");
        user.setEmail("new-email");
        user.setPassword("new-password");
        user.setRoles(["new-role"]);

        const getters = {
            getUuid: user.getUuid(),
            getUsername: user.getUsername(),
            getEmail: user.getEmail(),
            getPassword: user.getPassword(),
            getRoles: user.getRoles()
        };

        expect(getters.getEmail).toBe("new-email");
        expect(getters.getUuid).toBe("new-uuid");
        expect(getters.getUsername).toBe("new-username");
        expect(getters.getPassword).toBe("new-password");
        expect(getters.getRoles).toEqual(["new-role"]);
    
    });
});