import { Field, InputType } from "@nestjs/graphql";
import { IsAlpha } from "class-validator";

@InputType()
export class CreatePetInput{

    @IsAlpha()//data validation
    @Field()
    name:string;

    @Field()
    type?:string;
}