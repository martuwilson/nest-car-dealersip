import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
//@UsePipes(ValidationPipe) //usePipes a nivel de controlador para validar todos los DTOs
export class CarsController {

    constructor(private readonly carsService: CarsService) {
        
    }

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById(@Param('id', ParseUUIDPipe) id: string) { // Using ParseUUIDPipe to ensure the id is a valid UUID
        return this.carsService.findById(id);
    }

    @Post()
    createCar(@Body() CreateCarDto: CreateCarDto) {
        return this.carsService.createCar(CreateCarDto);
    }

    @Patch(':id')
    updateCar(@Param('id', ParseUUIDPipe) id: string, @Body() carData: any) {
        return this.carsService.updateCar(id, carData);
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id: string) {
        return this.carsService.deleteCar(id);
    }

}
