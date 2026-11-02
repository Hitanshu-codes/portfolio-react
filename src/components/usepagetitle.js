import { useEffect } from 'react';

export default function usePageTitle(title) {
    useEffect(() => {
        document.title = title ? `${title} | Hitanshu Tandon` : 'Hitanshu Tandon | Full Stack AI Engineer';
    }, [title]);
}
