"use client"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";
 
export function CardDefault({courseTitle , courseImg , courseDescription}) {
  
  
  return (
    <Card className="mx-auto  mt-6 w-80 flex flex-col rounded-lg p-5 dark:bg-slate-800 dark:text-white">
      <CardHeader color="blue-gray" className="relative w-72 h-48">
        <img
          src={courseImg}
          alt="card-image"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" color="blue-gray" className="mb-2 mt-3">
          {courseTitle}
        </Typography>
        <Typography>
        {courseDescription}
        </Typography>
      </CardBody>
      <CardFooter className="text-center pt-3">
      <Link href={`courses/${courseTitle}`}>
          <Button className="p-3 bg-black ">Open Course</Button>
      </Link>
      </CardFooter>
    </Card>
  );
}