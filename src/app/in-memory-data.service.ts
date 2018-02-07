import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            { id: 11, name: 'Goku', power: 9001 },
            { id: 12, name: 'Narco', power: 200 },
            { id: 13, name: 'Bombasto',  power: 150 },
            { id: 14, name: 'Celeritas', power: 90 },
            { id: 15, name: 'Magneta', power: 500 },
            { id: 16, name: 'RubberMan', power: 450 },
            { id: 17, name: 'Dynama', power: 750 },
            { id: 18, name: 'Dr IQ', power: 15 },
            { id: 19, name: 'Magma', power: 780 },
            { id: 20, name: 'Tornado', power: 9000 }
        ];
        return { heroes };
    }
}
