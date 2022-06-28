import Swal from 'sweetalert2';

function alertaBasica(icono, msg) {
    /* Swal.fire({
        position: 'top-end',
        icon: icon,
        title: msg,
        showConfirmButton: false,
        timer: 1500,
    }) */

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: false,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
      })

      Toast.fire({
        icon: icono,
        title: msg,
      })
}

export default alertaBasica;