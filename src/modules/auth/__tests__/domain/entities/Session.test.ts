import { Session } from "../../../domain/entities/Session";

describe("Session", () => {
    it("should create a new session", () => {

        const expiresAt = new Date();
        const createdAt = new Date();
        
        const session = new Session(
            "22as-2as2-2as2-1as2",
            "22as-2as2-2as2-1as2",
            "asd654a4sda54sd6a4sd654asd65a4s6d546a4sd6a4sd6a54sd6a4fdsvd6fadgbsDNOVDNSDFNBVSJVNJVNIJNCNJAKÇVJNDSLVJNSLVJNASVKLJNSDVBSDVBN23452342453465",
            expiresAt,
            createdAt
        );

        expect(session.getUuid()).toBe("22as-2as2-2as2-1as2");
        expect(session.getUserUuid()).toBe("22as-2as2-2as2-1as2");
        expect(session.getToken()).toBe("asd654a4sda54sd6a4sd654asd65a4s6d546a4sd6a4sd6a54sd6a4fdsvd6fadgbsDNOVDNSDFNBVSJVNJVNIJNCNJAKÇVJNDSLVJNSLVJNASVKLJNSDVBSDVBN23452342453465");
        expect(session.getExpiresAt()).toBe(expiresAt);
        expect(session.getCreatedAt()).toBe(createdAt);
    
    });

    it("should update session", () => {

        const session = new Session(
            "22as-2as2-2as2-1as2",
            "22as-2as2-2as2-1as2",
            "asd654a4sda54sd6a4sd654asd65a4s6d546a4sd6a4sd6a54sd6a4fdsvd6fadgbsDNOVDNSDFNBVSJVNJVNIJNCNJAKÇVJNDSLVJNSLVJNASVKLJNSDVBSDVBN23452342453465",
            new Date(),
            new Date()
        );

        const dataTime = new Date();

        session.setUuid("new-uuid");
        session.setUserUuid("new-user-uuid");
        session.setToken("new-token");
        session.setExpiresAt(dataTime);

        expect(session.getUuid()).toBe("new-uuid");
        expect(session.getUserUuid()).toBe("new-user-uuid");
        expect(session.getToken()).toBe("new-token");
        expect(session.getExpiresAt().getTime()).toBe(dataTime.getTime());
    });


    it("should test getters and setters", () => {

        const createdAt = new Date();

        const session = new Session(
            "22as-2as2-2as2-1as2",
            "22as-2as2-2as2-1as2",
            "asd654a4sda54sd6a4sd654asd65a4s6d546a4sd6a4sd6a54sd6a4fdsvd6fadgbsDNOVDNSDFNBVSJVNJVNIJNCNJAKÇVJNDSLVJNSLVJNASVKLJNSDVBSDVBN23452342453465",
            new Date(),
            createdAt
        );

        const expiresAt = new Date();

        session.setUuid("new-uuid");
        session.setUserUuid("new-user-uuid");
        session.setToken("new-token");
        session.setExpiresAt(expiresAt);

        expect(session.getUuid()).toBe("new-uuid");
        expect(session.getUserUuid()).toBe("new-user-uuid");
        expect(session.getToken()).toBe("new-token");
        expect(session.getExpiresAt()).toBe(expiresAt);
    });

});