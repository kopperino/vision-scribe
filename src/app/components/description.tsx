'use client';

import { useEffect, useState } from 'react';

type ImagePanelProps = {
    imagePath: string;
};

export default function Description({ imagePath }: ImagePanelProps) {
    const [description, setDescription] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `/api/llm?file=${encodeURIComponent(imagePath)}`
                );
                if (!response.ok) {
                    throw new Error('Error...');
                }

                const result = await response.json();
                console.log(result);
                setDescription(result.message);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [imagePath]);

    return <div className="bg-black">{description}</div>;
}
