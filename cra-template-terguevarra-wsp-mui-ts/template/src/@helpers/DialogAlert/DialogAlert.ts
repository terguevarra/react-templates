import Swal, { SweetAlertOptions } from 'sweetalert2';

import { DialogConstants } from './constants';

class DialogAlert{
    static Success = (_title : string | HTMLElement, 
                        _text : string | HTMLElement, 
                        _timer? : number | string | undefined) => {
        Swal.fire({
            title: _title,
            html: _text,
            icon: DialogConstants.DIALOGTYPES.SUCCESS,
            timer: _timer === undefined ? DialogConstants.TIMER : _timer === 'none' ? null : _timer,
            allowOutsideClick: DialogConstants.ALLOWOUTSIDECLICK,
            allowEscapeKey: DialogConstants.ALLOWESCAPEKEY,
            allowEnterKey: DialogConstants.ALLOWENTERKEY
        } as SweetAlertOptions);
    }

    static Warning = (_title : string | HTMLElement, 
                        _text : string | HTMLElement, 
                        _timer? : number | string | undefined) => {
        Swal.fire({
            title: _title,
            html: _text,
            icon: DialogConstants.DIALOGTYPES.WARNING,
            timer: _timer === undefined ? DialogConstants.TIMER : _timer === 'none' ? null : _timer,
            allowOutsideClick: DialogConstants.ALLOWOUTSIDECLICK,
            allowEscapeKey: DialogConstants.ALLOWESCAPEKEY,
            allowEnterKey: DialogConstants.ALLOWENTERKEY
        } as SweetAlertOptions);
    }

    static Error = (_title : string | HTMLElement, 
                    _text : string | HTMLElement, 
                    _timer? : number | string | undefined) => {
        Swal.fire({
            title: _title,
            html: _text,
            icon: DialogConstants.DIALOGTYPES.ERROR,
            timer: _timer === undefined ? DialogConstants.TIMER : _timer === 'none' ? null : _timer,
            allowOutsideClick: DialogConstants.ALLOWOUTSIDECLICK,
            allowEscapeKey: DialogConstants.ALLOWESCAPEKEY,
            allowEnterKey: DialogConstants.ALLOWENTERKEY
        } as SweetAlertOptions);
    }

    static Confirm = (_title : string | HTMLElement, 
                        _text : string | HTMLElement, 
                        _confirmCallback: () => void, 
                        _cancelCallback: () => void, 
                        _confirmText? : string | undefined, 
                        _cancelText? : string | undefined, 
                        _hasCancelButton? : boolean | undefined) => {
        Swal.fire({
            title: _title,
            html: _text,
            icon: DialogConstants.DIALOGTYPES.INFO,
            showCancelButton: _hasCancelButton === undefined ? true : _hasCancelButton,
            confirmButtonText: _confirmText,
            cancelButtonText: _cancelText,
            allowOutsideClick: DialogConstants.ALLOWOUTSIDECLICK,
            allowEscapeKey: DialogConstants.ALLOWESCAPEKEY,
            allowEnterKey: DialogConstants.ALLOWENTERKEY
        } as SweetAlertOptions).then(result => {
            if(result.isConfirmed){
                _confirmCallback();
            }else{
                _cancelCallback();
            }
        });
    }

    static SuccessWithConfirm = (_title : string | HTMLElement, 
                                    _text : string | HTMLElement, 
                                    _confirmCallback: () => void, 
                                    _cancelCallback: () => void, 
                                    _confirmText? : string | undefined, 
                                    _cancelText? : string | undefined, 
                                    _hasCancelButton? : boolean | undefined) => {
        Swal.fire({
            title: _title,
            html: _text,
            icon: DialogConstants.DIALOGTYPES.SUCCESS,
            showCancelButton: _hasCancelButton === undefined ? true : _hasCancelButton,
            confirmButtonText: _confirmText,
            cancelButtonText: _cancelText,
            allowOutsideClick: DialogConstants.ALLOWOUTSIDECLICK,
            allowEscapeKey: DialogConstants.ALLOWESCAPEKEY,
            allowEnterKey: DialogConstants.ALLOWENTERKEY
        } as SweetAlertOptions).then(result => {
            if(result.isConfirmed){
                _confirmCallback();
            }else{
                _cancelCallback();
            }
        });
    }

    static WarningWithConfirm = (_title : string | HTMLElement, 
                                    _text : string | HTMLElement, 
                                    _confirmCallback: () => void, 
                                    _cancelCallback: () => void, 
                                    _confirmText? : string | undefined, 
                                    _cancelText? : string | undefined, 
                                    _hasCancelButton? : boolean | undefined) => {
        Swal.fire({
            title: _title,
            html: _text,
            icon: DialogConstants.DIALOGTYPES.WARNING,
            showCancelButton: _hasCancelButton === undefined ? true : _hasCancelButton,
            confirmButtonText: _confirmText,
            cancelButtonText: _cancelText,
            allowOutsideClick: DialogConstants.ALLOWOUTSIDECLICK,
            allowEscapeKey: DialogConstants.ALLOWESCAPEKEY,
            allowEnterKey: DialogConstants.ALLOWENTERKEY
        } as SweetAlertOptions).then(result => {
            if(result.isConfirmed){
                _confirmCallback();
            }else{
                _cancelCallback();
            }
        });
    }
}

export default DialogAlert;