import { useState } from 'react';

function useManageModals(defaultModalState : boolean, defaultItemToManage : any){
    const [isModalOpen, setIsModalOpen] = useState<boolean>(defaultModalState);
    const [modalType, setModalType] = useState<string>('');
    const [itemToManage, setItemToManage] = useState<any>(defaultItemToManage);

    const closeModal = () => {
        setModalType('');
        setItemToManage(defaultItemToManage);
        setIsModalOpen(false);
    }

    const openModal = (_type : string, _item : any = defaultItemToManage) => {
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