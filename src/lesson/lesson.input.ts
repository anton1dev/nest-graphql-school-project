import { Field, InputType } from '@nestjs/graphql';
import { MinLength, IsDateString } from 'class-validator';

@InputType()
export class CreateLessonInput {
  @MinLength(5)
  @Field()
  name: string;

  @IsDateString()
  @Field()
  startDate: string;

  @IsDateString()
  @Field()
  endDate: string;
}
