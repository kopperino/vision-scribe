import Image from 'next/image';

type imagePanelProps = {
    imagePath: string;
};

export default function ImagePanel(imagePanelProps: imagePanelProps) {
    return (
        <div className="w-full h-full relative">
            <Image
                src={imagePanelProps.imagePath || '/uploads/files/test.jpg'}
                alt="test"
                fill
                className="object-center"
            />
        </div>
    );
}
