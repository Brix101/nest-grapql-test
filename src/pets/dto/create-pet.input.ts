import { Field, InputType, Int } from "@nestjs/graphql";
import { IsAlpha } from "class-validator";

@InputType()
export class CreatePetInput{

    @IsAlpha()//data validation
    @Field()
    name:string;

    @Field()
    type?:string;

    @Field((type)=>Int)
    ownerId:number
}