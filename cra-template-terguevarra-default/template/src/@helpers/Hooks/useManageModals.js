import React, { useState } from 'react';

function useManageModals(defaultModalState, defaultItemToManage){
    const [isModalOpen, setIsModalOpen] = useState(defaultModalState);
    const [modalType, setModalType] = useState('');
    const [itemToManage, setItemToManage] = useState(defaultItemToManage);

    const closeModal = () => {
        setModalType('');
        setItemToManage(defaultItemToManage);
        setIsModalOpen(false);
    }

    const openModal = (_type, _item = defaultItemToManage) => {
        setModalType(_type);
        setItemToManage(_item);
        setIsModalOpen(true);
    }

    return [
        isModalOpen,
        modalType,
        itemToManage,
        openModal,
        closeModal
    ]
}

export default useManageModals;