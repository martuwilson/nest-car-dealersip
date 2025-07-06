import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        { id: 1, make: 'Toyota', model: 'Corolla', year: 2020 },
        { id: 2, make: 'Honda', model: 'Civic', year: 2019 },
        { id: 3, make: 'Ford', model: 'Focus', year: 2018 },
        { id: 4, make: 'Chevrolet', model: 'Malibu', year: 2021 },
        { id: 5, make: 'Nissan', model: 'Altima', year: 2022 }
    ];


    findAll() {
        return this.cars;
    }

    findById(id: number) {
        return this.cars.find(car => car.id === id);
    }

}
