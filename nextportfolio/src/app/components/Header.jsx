"use client";
import React from 'react';
import HeroImg from '../img/HeaderEdit2.png';
import Image from 'next/image';

export default function Header() {
    return (
        <div>
            <Image                
                width={3024}
                height={924}
                src={HeroImg}
                alt='Man with hands overlapping the top of the webpage as if he is holding onto it'
            />
            <h1
                className=''
            >Andrew Larson</h1>
        </div>
    )
};