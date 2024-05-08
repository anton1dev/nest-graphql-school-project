import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateStudentInput {
  @MinLength(3)
  @Field()
  firstName: string;

  @MinLength(4)
  @Field()
  lastName: string;
}
