export class TaskModel {
    constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public status: boolean = true,
    public priority: string = 'primary'
    ) {}
}
