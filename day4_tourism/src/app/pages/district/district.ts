import { Component } from '@angular/core';
import { Card } from "../../common/card/card";

@Component({
  selector: 'app-district',
  imports: [Card],
  templateUrl: './district.html',
  styleUrl: './district.css'
})
export class District {

  districts = [
    {
      title: 'Thiruvananthapuram',
      imglink: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/da/f5/55/kovalam-beach.jpg?w=1200&h=700&s=1',
      description: 'The capital city, known for its rich history and cultural heritage.'
    },
    {
      title: 'Kollam',
      imglink: 'https://vardhmanvacations.com/blog/wp-content/uploads/2024/09/jatayu-earth-center-kollam-1024x646.jpg',
      description: 'A vibrant city famous for its port, backwaters, and colonial architecture.'
    },
    {
      title: 'Pathanamthitta',
      imglink: 'https://mediaim.expedia.com/destination/2/f54382f5d47ecb98dc8ba40242dc2f6b.jpg',
      description: 'Known for its lush greenery and the famous Sabarimala temple.'
    },
    {
      title: 'Alappuzha',
      imglink: 'https://www.mattindia.com/wp-content/uploads/2023/04/Tourist-Attractions-In-Alappuzha-1000x500.jpg',
      description: 'Known for its houseboats and beaches.'
    },
    {
      title: 'Kottayam',
      imglink: 'https://www.clubmahindra.com/blog/media/section_images/15kottayam-d72ed3ff1b8af6f.webp',
      description: 'Famous for its rubber plantations and backwaters.'
    },
    {
      title: 'Idukki',
      imglink: 'https://keralatourism.travel/images/destinations/headers/idukki-kerala-tourism-entry-fee-timings-holidays-reviews-header.jpg',
      description: 'Famous for its hill stations and wildlife sanctuaries.'
    },
    {
      title: 'Ernakulam',
      imglink: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Kochi_International_Marina%2C_Bolgatty_Island%2C_Kerala%2C_India.jpg',
      description: 'Known for its commercial hub, Kochi, and vibrant culture.'
    },
    {
      title: 'Thrissur',
      imglink: 'https://s7ap1.scene7.com/is/image/incredibleindia/vadakkunnathan-temple-thrissur-kerala-1-attr-hero?qlt=82&ts=1742156070025',
      description: 'Known as the cultural capital of Kerala, famous for its festivals and temples.'
    },
    {
      title: 'Palakkad',
      imglink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Palakkad_Tipu_Fort.jpg/1200px-Palakkad_Tipu_Fort.jpg',
      description: 'Home to Palakkad Fort, paddy fields, and lush landscapes.'
    },
    {
      title: 'Malappuram',
      imglink: 'https://lgstravellers.com/wp-content/uploads/2024/02/e1d684c3e4.webp',
      description: 'Famous for its historic significance and cultural heritage.'
    },
    {
      title: 'Kozhikode',
      imglink: 'https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/15/b99098ce6b598fff72365bfc37c235d0_1000x1000.jpg',
      description: 'Known for its beaches, spice markets, and Malabar cuisine.'
    },
    {
      title: 'Wayanad',
      imglink: 'https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/12/23173554/glass-bridge-wayanad.jpeg',
      description: 'Famous for its waterfalls, wildlife, and scenic landscapes.'
    },
    {
      title: 'Kannur',
      imglink: 'https://www.southtourism.in/assets/images/cityinfo/kannur1.png',
      description: 'Known for its handloom industry and beautiful beaches.'
    },
    {
      title: 'Kasaragod',
      imglink: 'https://www.konkan.me/wp-content/uploads/2024/05/1-Kasaragod.jpg',
      description: 'Famous for Bekal Fort and pristine beaches.'
    }
  ];
item: any;
}

