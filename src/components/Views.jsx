import React, { useEffect, useRef, useState } from 'react'
import product from '../Product'

const Views = () => {

    const [current, setCurrent] = useState(0)
    const [openModal, setOpenModal] = useState(false);
    const [modalCurrent, setModalCurrent] = useState(0)

    const handleFullsize = (index) => {
        setCurrent(index)
    }
    const handleNext = () => {
        if (current < product.fullSize.length - 1) {
            setCurrent(current + 1);
        } else {
            setCurrent(0)
        }
    }
    const handlePrevious = () => {
        if (current > 0) {
            setCurrent(current - 1);
        } else {
            setCurrent(product.fullSize.length - 1)
        }
    };
    const modalNext = () => {
        if (modalCurrent < product.fullSize.length - 1) {
            setModalCurrent(modalCurrent + 1);
        } else {
            setModalCurrent(0)
        }
    }

    const modalPrevious = () => {
        if (modalCurrent > 0) {
            setModalCurrent(modalCurrent - 1);
        } else {
            setModalCurrent(product.fullSize.length - 1)
        }
    }

    const handleModal = () => {
        if (!openModal) {
            setOpenModal(true)

        } else {
            setOpenModal(false)
        }
    }
    const modalFullSize = (index) => {
        setModalCurrent(index)
    }

    const modalRef = useRef();

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setOpenModal(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const renderContent = () => (
        <>
            <section>
                <div className='fullSizeImg'>
                    <img className='bigImage' onClick={handleModal} src={`images/${product.fullSize[current]}`} alt="" />
                    <svg className='previous' onClick={handlePrevious} width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" /></svg>

                    <svg className='next' onClick={handleNext} width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
                </div>
                <div className='thumbnails'>
                    {product.thumbnails.map((image, index) => (
                        <div className='thumbnailImg' onClick={() => handleFullsize(index)} key={index}> <img src={`images/${image}`} alt="thumbnail" key={index} className={`${index === current ? 'activeimg' : ''}`} /> </div>
                    ))}
                </div>
            </section>
        </>
    );

    const modalContent = () => (
        <>
            <div className="modal-content" ref={modalRef} >
                <svg className='close'
                    onClick={handleModal}
                    width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill-rule="evenodd" />
                    </svg>
                <div>
                    <div className='fullSizeImg'>
                        <img className='bigImage' src={`images/${product.fullSize[modalCurrent]}`} alt="" />
                        <svg style={{ display: openModal && 'block' }} className='previous' onClick={modalPrevious} width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" />
                        </svg>

                        <svg style={{ display: openModal && 'block' }} className='next' onClick={modalNext} width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
                    </div>
                    <div className='thumbnails'>
                        {product.thumbnails.map((image, index) => (
                            <div className='thumbnailImg' onClick={() => modalFullSize(index)} key={index}> 
                            <img src={`images/${image}`} alt="thumbnail" key={index} className={`${index === modalCurrent ? 'activeimg' : ''}`} /> 
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>

    )
    return (
        <>
            
                {renderContent()}
            
            {openModal &&
                <div className="modal">
                    {modalContent()}
                </div>
            }
        </>
    )
}

export default Views