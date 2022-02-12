import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/all')
  getHello(){
    return this.appService.getHello();
  }

  @Get('/country/sate/city')
   getSomeDetail (){
    return  this.appService.getAllcity()
  }

  @Get('/country/:country')
  getFilterCountrySome(@Param('country') country){
    return this.appService.getFilterByCountry(country)

  }

  @Get('/country/state/:country/:state')
  getFilterstateSome(@Param('country') country ,@Param('state') state){
    return this.appService.getFilterBystate(country ,state)

  }
  @Get('/country/state/city/:country/:state/:city')
  getFiltercitySome(@Param('country') country ,@Param('state') state ,@Param('city') city){
    return this.appService.getFilterByCity(country ,state ,city)

  }


  @Get('/all/country/:country')
  getFilterCountryAll(@Param('country') country){
    return this.appService.getAllFilterByCounty(country)

  }

  @Get('/all/country/state/:country/:state')
  getFilterstateAll(@Param('country') country , @Param('state') state){
    return this.appService.getAllFilterByState(country ,state)


   
  }
  @Get('/all/country/state/city/:country/:state/:city')
  getFiltercityAll(@Param('country') country , @Param('state') state ,@Param('city') city){
    return this.appService.getAllFilterByCity(country ,state ,city)

  }








}
