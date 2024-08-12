class Role {

    private uuid : string;
    private name : string;
    
    constructor(uuid : string, name : string) {
        this.uuid = uuid;
        this.name = name;
    }

    public getUuid() : string {
        return this.uuid;
    }

    public setUuid(uuid : string) : void {
        this.uuid = uuid;
    }

    public getName() : string {
        return this.name;
    }

    public setName(name : string) : void {
        this.name = name;
    }

}

export { Role };