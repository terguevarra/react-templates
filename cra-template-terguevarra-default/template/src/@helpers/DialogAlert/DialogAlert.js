import Swal from 'sweetalert2/src/sweetalert2.js';

import { DialogConstants } from './constants';

class DialogAlert{
    static Success = (_title, _text, _timer) => {
        Swal.fire({
            title: _title,
            html: _text,
            icon: DialogConstants.DIALOGTYPES.SUCCESS,
            timer: _timer === undefined ? DialogConstants.TIMER : _timer === 'none' ? null : _timer,
            allowOutsideClick: DialogConstants.ALLOWOUTSIDECLICK,
            allowEscapeKey: DialogConstants.ALLOWESCAPEKEY,
            allowEnterKey: DialogConstants.ALLOWENTERKEY
        });
    }

    static Warning = (_title, _text, _timer) => {
        Swal.fire({
            title: _title,
            html: _text,
            icon: DialogConstants.DIALOGTYPES.WARNING,
            timer: _timer === undefined ? DialogConstants.TIMER : _timer === 'none' ? null : _timer,
            allowOutsideClick: DialogConstants.ALLOWOUTSIDECLICK,
            allowEscapeKey: DialogConstants.ALLOWESCAPEKEY,
            allowEnterKey: DialogConstants.ALLOWENTERKEY
        });
    }

    static Error = (_title, _text, _timer) => {
        Swal.fire({
            title: _title,
            html: _text,
            icon: DialogConstants.DIALOGTYPES.ERROR,
            timer: _timer === undefined ? DialogConstants.TIMER : _timer === 'none' ? null : _timer,
            allowOutsideClick: DialogConstants.ALLOWOUTSIDECLICK,
            allowEscapeKey: DialogConstants.ALLOWESCAPEKEY,
            allowEnterKey: DialogConstants.ALLOWENTERKEY
        });
    }

    static Confirm = (_title, _text, _confirmCallback, _cancelCallback, _confirmText, _cancelText, _hasCancelButton) => {
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
        }).then(result => {
            if(result.isConfirmed){
                _confirmCallback();
            }else{
                _cancelCallback();
            }
        });
    }

    static SuccessWithConfirm = (_title, _text, _confirmCallback, _cancelCallback, _confirmText, _cancelText, _hasCancelButton) => {
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
        }).then(result => {
            if(result.isConfirmed){
                _confirmCallback();
            }else{
                _cancelCallback();
            }
        });
    }

    static WarningWithConfirm = (_title, _text, _confirmCallback, _cancelCallback, _confirmText, _cancelText, _hasCancelButton) => {
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
        }).then(result => {
            if(result.isConfirmed){
                _confirmCallback();
            }else{
                _cancelCallback();
            }
        });
    }
}

export default DialogAlert;