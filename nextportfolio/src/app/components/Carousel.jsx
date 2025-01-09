'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import IdeaBulb from '../img/IdeaBulb.png';
import IdeaBulb2 from '../img/IdeaBulb2.png';
import SQLThought from '../img/SQLThought.png';
import JavaThought from '../img/JavaThought.png';
import ReactThought from '../img/ReactThought.png';
import PythonThought from '../img/PythonThought.png';
import TypescriptThought from '../img/TypescriptThought.png';

export default function Carousel() {
    
    useEffect(() => {    

        let slideIndex = 0;
        showSlides();
        
        function showSlides() {
          let i;
          let slides = document.getElementsByClassName("mySlides");
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
          }
          slideIndex++;
          if (slideIndex > slides.length) {slideIndex = 1}    
          
          slides[slideIndex-1].style.display = "block";  
          setTimeout(showSlides, 3000); // Change image every 3 seconds
        }    
        
    },[])

    return (
            <div className='bodyLayer'>
                
                <Image 
                    className='slideshow-images mySlides fade'
                    src={ReactThought}
                    width={3024}
                    height={1500} 
                />

                <Image 
                    className='slideshow-images mySlides fade'
                    src={PythonThought}
                    width={3024}
                    height={1500}
                />                  
        
                <Image
                    className='slideshow-images mySlides fade'
                    src={JavaThought} 
                    width={3024}
                    height={1500}                        
                />   

                <Image
                    className='slideshow-images mySlides fade'
                    src={TypescriptThought} 
                    width={3024}
                    height={1500}                        
                />    

                <Image
                    className='slideshow-images mySlides fade'
                    src={IdeaBulb2} 
                    width={3024}
                    height={1500}                        
                />   

                <Image
                    className='slideshow-images mySlides fade'
                    src={SQLThought} 
                    width={3024}
                    height={1500}                        
                />   

                <Image
                    className='slideshow-images mySlides fade'
                    src={IdeaBulb} 
                    width={3024}
                    height={1500}                        
                />   
                
            </div>
    )
}