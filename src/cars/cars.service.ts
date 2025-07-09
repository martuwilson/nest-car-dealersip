import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid'
import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        { id: uuid(), brand: 'Toyota', model: 'Corolla', year: 2020 },
        { id: uuid(), brand: 'Honda', model: 'Civic', year: 2019 },
        { id: uuid(), brand: 'Ford', model: 'Focus', year: 2018 },
        { id: uuid(), brand: 'Chevrolet', model: 'Malibu', year: 2021 },
        { id: uuid(), brand: 'Nissan', model: 'Altima', year: 2022 }
    ];


    findAll() {
        return this.cars;
    }

    findById(id: string) {
        const car = this.cars.find(car => car.id === id);

        if (!car) throw new NotFoundException(`Car with ID ${id} not found`);

        return car;
    }

    createCar(carData: CreateCarDto) {
        const newCar = { id: uuid(), ...carData };
        this.cars.push(newCar);
        return newCar;
    }

    updateCar(id: string, carData: UpdateCarDto) {
        const carIndex = this.cars.findIndex(car => car.id === id);

        if (carIndex === -1) throw new NotFoundException(`Car with ID ${id} not found`);

        this.cars[carIndex] = { ...this.cars[carIndex], ...carData };
        return this.cars[carIndex];
    }

    deleteCar(id: string) {
        const carIndex = this.cars.findIndex(car => car.id === id);

        if (carIndex === -1) throw new NotFoundException(`Car with ID ${id} not found`);

        this.cars.splice(carIndex, 1);
        return { deleted: true };
    }

}
