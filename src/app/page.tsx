'use client';

import Image from 'next/image';
import NavigationBar from './components/navigationbar';
import Form from './components/form';
import ImagePanel from './components/image';
import { useState } from 'react';
import Description from './components/description';

export default function Home() {
    const [imagePath, setImagePath] = useState('');
    console.log(imagePath);

    return (
        <div className="h-screen flex flex-col">
            <div>
                <NavigationBar />
            </div>
            <div className="flex flex-row justify-center items-center flex-grow bg-gray-500">
                <div className="bg-black w-1/2 h-1/2 m-5 flex flex-col items-center justify-center">
                    <Form setImagePath={setImagePath} />
                </div>
                <div className="bg-black w-1/2 h-1/2 m-5">
                    <ImagePanel imagePath={imagePath} />
                    <Description imagePath={imagePath} />
                </div>
            </div>
        </div>
    );
}
