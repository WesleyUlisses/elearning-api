import { Role } from "../../../domain/entities/Role";

describe("Role", () => {

    it("should create a new role", () => {
        const role = new Role(
            "22as-2as2-2as2-1as2",
            "Teacher",
        );

        expect(role.getUuid()).toBe("22as-2as2-2as2-1as2");
        expect(role.getName()).toBe("Teacher");
    });

    it("should update role", () => {
        const role = new Role(
            "uuid",
            "role",
        );

        role.setUuid("new-uuid");
        role.setName("new-role");

        expect(role.getUuid()).toBe("new-uuid");
        expect(role.getName()).toBe("new-role");
    });

    it("should test getters and setters", () => {
        
        const role = new Role(
            "uuid",
            "role",
        );

        role.setUuid("new-uuid");
        role.setName("new-role");

        expect(role.getUuid()).toBe("new-uuid");
        expect(role.getName()).toBe("new-role");
    });
});