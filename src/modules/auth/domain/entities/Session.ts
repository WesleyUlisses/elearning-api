class Session {

    private uuid: string;
    private userUuid: string;
    private token: string;
    private expiresAt: Date;
    private createdAt: Date;

    constructor( uuid: string, userUuid: string, token: string, expiresAt: Date, createdAt: Date ) {
        this.uuid = uuid;
        this.userUuid = userUuid;
        this.token = token;
        this.expiresAt = expiresAt;
        this.createdAt = createdAt;
    }

    public getUuid(): string {
        return this.uuid;
    }

    public setUuid(uuid: string): void {
        this.uuid = uuid;
    }

    public getUserUuid(): string {
        return this.userUuid;
    }

    public setUserUuid(userUuid: string): void {
        this.userUuid = userUuid;
    }

    public getToken(): string {
        return this.token;
    }

    public setToken(token: string): void {
        this.token = token;
    }

    public getExpiresAt(): Date {
        return this.expiresAt;
    }

    public setExpiresAt(expiresAt: Date): void {
        this.expiresAt = expiresAt;
    }

    public getCreatedAt(): Date {
        return this.createdAt;
    }

    public setCreatedAt(createdAt: Date): void {
        this.createdAt = createdAt;
    }

}

export { Session };