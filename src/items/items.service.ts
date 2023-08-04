import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/items.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne<Item>({ _id: id });
  }

  async Create(item: Item): Promise<string> {
    const { name, quantity, description } = item;
    await this.itemModel.create({
      name,
      qty: quantity,
      description,
    });

    return 'Successfully created new item';
  }

  async delete(id: string): Promise<string> {
    await this.itemModel.findByIdAndDelete(id);

    return 'Successfully delted item';
  }

  async update(id: string, item: Item): Promise<Item> {
    const { name, quantity, description } = item;
    const newItem = await this.itemModel.findByIdAndUpdate(id, {
      name,
      qty: quantity,
      description,
    });

    return newItem;
  }
}
