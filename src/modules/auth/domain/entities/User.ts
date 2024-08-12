class User {
    
    private uuid: string;
    private username: string;
    private email: string;
    private password: string;
    private roles: string[];
    private createdAt: Date;
    private updatedAt: Date;

    constructor(uuid: string, username: string, email: string, password: string, roles: string[], createdAt: Date, updatedAt: Date) {
        this.uuid = uuid;
        this.username = username;
        this.email = email;
        this.password = password;
        this.roles = roles;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public getUuid(): string {
        return this.uuid;
    }

    public setUuid(uuid: string): void {
        this.uuid = uuid;
    }

    public getUsername(): string {
        return this.username;
    }

    public setUsername(username: string): void {
        this.username = username;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

    public getRoles(): string[] {
        return this.roles;
    }

    public setRoles(roles: string[]): void {
        this.roles = roles;
    }

    public getCreatedAt(): Date {
        return this.createdAt;
    }

    public setCreatedAt(createdAt: Date): void {
        this.createdAt = createdAt;
    }

    public getUpdatedAt(): Date {
        return this.updatedAt;
    }

    public setUpdatedAt(updatedAt: Date): void {
        this.updatedAt = updatedAt;
    }

}

export { User };