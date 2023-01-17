export interface IDatabase {
    transaction<T>(fn: () => Promise<T>): T;
}