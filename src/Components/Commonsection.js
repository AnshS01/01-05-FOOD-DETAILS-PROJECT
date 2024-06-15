import React from 'react'

function Commonsection(props) {
    return (
        <div>
            <section className='common_sec'>
                <div className='container'>
                    <div className='row'>
                        <h2 className='text-light'>{props.title}</h2>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Commonsection