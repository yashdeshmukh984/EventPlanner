export class Cache {
    private cache: Map<string, { data: any; expiry: number }>;

    constructor() {
        this.cache = new Map();
    }

    set(key: string, data: any, ttl: number) {
        const expiry = Date.now() + ttl * 1000; // ttl in seconds
        this.cache.set(key, { data, expiry });
    }

    get(key: string) {
        const cached = this.cache.get(key);
        if (!cached) return null;

        if (Date.now() > cached.expiry) {
            this.cache.delete(key);
            return null;
        }

        return cached.data;
    }

    clear() {
        this.cache.clear();
    }
}