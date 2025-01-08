import React from 'react';

const Loder = () => {
    return (
        <div>
            <div className={'container mx-auto'}>
                <div className={'flex items-center justify-center h-screen'}>
                    <div className={'text-center'}>
                        <span className="loading loading-spinner loading-xs"></span>
                        <span className="loading loading-spinner loading-sm"></span>
                        <span className="loading loading-spinner loading-md"></span>
                        <span className="loading loading-spinner loading-lg"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loder;