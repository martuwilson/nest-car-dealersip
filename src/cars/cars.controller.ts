import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {

    private cars = [
        'Toyota',
        'Honda',
        'Ford',
        'Chevrolet',
        'BMW',
        'Mercedes',
    ];

    @Get()
    getAllCars() {
        return this.cars;
    }

    @Get(':id')
    getCarById(@Param('id') id: string) {
        const index = Number(id);
        if (isNaN(index) || index < 0 || index >= this.cars.length) {
            return 'Car not found';
        }
        return this.cars[index];
    }

}
