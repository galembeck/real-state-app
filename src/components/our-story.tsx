import Image from "next/image";

import homeImage from '../../public/home.jpg';
import buildingImage from '../../public/image-2.jpg';
import { Button } from "./ui/button";

export function OurStory() {
  return (
    <div className="container pt-20 pb-32 grid lg:grid-cols-2 gap-10">
      <div>
        <div className="relative h-fit w-fit">
          <Image 
            src={homeImage} 
            alt="Home picture" 
            width={400} 
            height={400} 
            className="object-cover" 
          />
          <Image 
            src={buildingImage} 
            alt="Building picture" 
            width={250} 
            height={250} 
            className="object-cover absolute top-1/2 left-1/2 border-4 hidden lg:block" 
          />
        </div>
      </div>

      <div>
        <p className="font-semibold mb-1">Our Story</p>
        <p className="text-3xl mb-2">Efficiency. Transparency. Control.</p>
        <p className="text-muted-foreground mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Orci ac auctor augue mauris augue neque. Orci dapibus ultrices 
        in iaculis nunc sed augue. At consectetur lorem donec massa sapien faucibus et molestie ac. 
        Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Rutrum quisque non tellus orci 
        ac. Mauris vitae ultricies leo integer malesuada nunc. Mollis aliquam ut porttitor leo a diam 
        sollicitudin tempor. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Amet volutpat 
        consequat mauris nunc congue nisi. Gravida cum sociis natoque penatibus. Scelerisque felis 
        imperdiet proin fermentum leo. Leo in vitae turpis massa sed elementum.
        </p>
        <Button>Read more</Button>
      </div>
    </div>
  );
}