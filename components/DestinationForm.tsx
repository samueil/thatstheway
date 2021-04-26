import React from "react";
import { Button, Flex, Input, FormLabel, FormControl } from '@chakra-ui/react'


const submit = ({startLocation, endLocation}) => {
  console.log("startLocation: "+ startLocation + "\nendLocation: " + endLocation )
}

export const DestinationForm = ({ onSubmit = submit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { startLocation, endLocation } = e.target.elements;
    onSubmit({
      startLocation: startLocation.value,
      endLocation: endLocation.value,
    });
  }

  return (
      <form onSubmit={handleSubmit}>
      <FormControl id="startLocation">
        <Flex direction="row" alignItems="center">
          <FormLabel as="legend"  htmlFor="startLocation" width="4rem" textAlign="right">
            From:
          </FormLabel>
          <Input
            type="startLocation"
            name="startLocation"
            title="startLocation"
            placeholder="Start"
            required
          />
        </Flex>
        </FormControl>
        <FormControl id="endLocation">
        <Flex direction="row" alignItems="center">
          <FormLabel as="legend" htmlFor="endLocation" width="4rem" textAlign="right">
            To:
          </FormLabel>
          <Input
            type="endLocation"
            name="endLocation"
            title="endLocation"
            placeholder="Destination"
            required
          />
        </Flex>
        <Flex direction="row" alignItems="center">
        <Button type="submit" ml="4rem" mt="4" width="100%">Show Route</Button>
        </Flex>
      </FormControl>
      </form>
  );
}
