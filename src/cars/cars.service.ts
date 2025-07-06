import { Injectable, NotFoundException } from '@nestjs/common';

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
        const car = this.cars.find(car => car.id === id);

        if (!car) throw new NotFoundException(`Car with ID ${id} not found`);

        return car;
    }

    createCar(carData: any) {
        const newCar = { id: this.cars.length + 1, ...carData };
        this.cars.push(newCar);
        return newCar;
    }

    updateCar(id: number, carData: any) {
        const carIndex = this.cars.findIndex(car => car.id === id);

        if (carIndex === -1) throw new NotFoundException(`Car with ID ${id} not found`);

        this.cars[carIndex] = { ...this.cars[carIndex], ...carData };
        return this.cars[carIndex];
    }

    deleteCar(id: number) {
        const carIndex = this.cars.findIndex(car => car.id === id);

        if (carIndex === -1) throw new NotFoundException(`Car with ID ${id} not found`);

        this.cars.splice(carIndex, 1);
        return { deleted: true };
    }

}
