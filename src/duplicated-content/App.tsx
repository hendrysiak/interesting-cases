import React from 'react';
import { getContentWithChildren } from './useData';

function App() {
    const [content, setConeent] = React.useState<any[] | null>(null);

    const getAll = () => {
        getContentWithChildren().then((data) => {
            setConeent(data);
        });
    };

    React.useEffect(() => {
        getAll();
    }, []);

    if (!content) return null;

    return (
        <div>
            <h1>Duplicated content</h1>
            {content.map((item: any) => {
                if (item.id === 1) return <p key={item.id}>{item.title}</p>
                else return <span key={item.id}>{item.title}</span>
            }
            )}
        </div>
    );
}

export default App;