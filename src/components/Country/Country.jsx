import React from 'react';

const Country = ({ country }) => {
    const { name, flags } = country;
    return (
        <div className="card bg-base-100  shadow-2xl">
            <figure>
                <img className='w-full h-[200px]' src={flags.png} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name.common}</h2>
                <p>{name.official}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">See Details</button>
                </div>
            </div>
        </div>
    );
};

export default Country;