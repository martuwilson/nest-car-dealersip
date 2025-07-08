import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(private readonly carsService: CarsService) {
        
    }

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById(@Param('id', ParseIntPipe) id: string) {
        return this.carsService.findById(id);
    }

    @Post()
    createCar(@Body() carData: any) {
        return this.carsService.createCar(carData);
    }

    @Patch(':id')
    updateCar(@Param('id', ParseIntPipe) id: string, @Body() carData: any) {
        return this.carsService.updateCar(id, carData);
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseIntPipe) id: string) {
        return this.carsService.deleteCar(id);
    }

}
