import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?:
  MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface SearchManufacturerProps {
  manufacturer: string,
  setManufacturer: (manufacturer: string) => void;//a function that takes a string and doesn't return anything, its a state.
}



{/**




  Adding a "?" in front of a
property tells that the type of that property is optional
being that it may not be found or it may be repsented by other element

an interface is a blueprint for an object, letting the object know what
properties it should have and what type of data it should hold.

An object is an instance of an interface, it is a concrete representation
  */}
