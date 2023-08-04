import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto, UpdateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/items.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(id);
  }
  @Post()
  async create(@Body() createItemDto: CreateItemDto): Promise<string> {
    return await this.itemsService.Create(createItemDto);
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<string> {
    return await this.itemsService.delete(id);
  }

  @Put(':id')
  async update(
    @Body() updateItemDto: UpdateItemDto,
    @Param('id') id,
  ): Promise<Item> {
    return await this.itemsService.update(id, updateItemDto);
  }
}
