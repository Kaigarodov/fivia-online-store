export type Whereable = {
    where: Record<string, string | string[] | number | number[]>;
  };
  
  export type Joinable = {
    /** поля, по которым провести join */
    join?: string[];
  };
  
  export type Attribute = {
    attributes: {
      exclude: string[];
    };
  };
  
  export type Order = {
    order: [string, 'increasing' | 'decreasing'];
  };
  
  export type Limit = {
    limit: number;
  };
  
  /**
   * Набор методов, что мы можем использовать при работе с базой данных
   * Через данный интерфейс происходит вся работа с бд на уровне инфраструктуры и сервисов
   */
  export interface IRepository<Entity> {
    create: (entity: Entity) => Promise<Entity>;
    createMany: (entities: Entity[]) => Promise<void>;
    updateOneById: (
      entity: Partial<Omit<Entity, 'id'>> & { id: string },
    ) => Promise<void>;
    updateMany: (
      diffs: Record<string, unknown>,
      config: Whereable,
    ) => Promise<void>;
    findOneById: <WithJoin>(
      id: string,
      config?: Partial<Joinable>,
    ) => Promise<WithJoin & Entity>;
    findManyById: (ids: string[]) => Promise<Entity[]>;
    findOne: (config: Partial<Joinable> & Whereable) => Promise<Entity>;
    findAll: <WithJoin = Entity>(
      config?: Partial<Joinable> &
        Partial<Whereable> &
        Partial<Attribute> &
        Partial<Order>,
    ) => Promise<WithJoin[]>;
    findAllByTime: (
      config: Partial<Whereable> & Order & Partial<Limit>,
    ) => Promise<Entity[]>;
    deleteOneById: (id: string) => Promise<void>;
    deleteMany: (config: Whereable) => Promise<void>;
  }
  