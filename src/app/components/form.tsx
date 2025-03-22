'use client';

import { useState } from 'react';

type formProps = {
    setImagePath: (imagePath: string) => void;
};

export default function Form(formProps: formProps) {
    const [file, setFile] = useState<File | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!file) {
            alert('Make sure to select a file...');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('/api/imageupload', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        const relativePath = data.imagePath.replace(
            '/home/pasokon/vision-scribe/public/uploads/files',
            '/uploads/files'
        );
        formProps.setImagePath(relativePath);
        console.log(relativePath);
        console.log(data);
        setFile(null);
        return data;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        } else {
            setFile(null);
        }
    };

    return (
        <form onSubmit={handleSubmit} method="post">
            <label className="bg-black rounded-2xl shadow shadow-white">
                Upload a file...
                <input
                    type="file"
                    name="file"
                    className="hidden"
                    onChange={handleChange}
                    accept="image/png, image/jpeg"
                />
            </label>

            <p>{file && file.name}</p>
            <button>Submit</button>
        </form>
    );
}
