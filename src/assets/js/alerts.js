import Swal from 'sweetalert2';

export function alertaBasica(icono, msg) {
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

export async function confirmDelete(question) {
  let resp = false
  await Swal.fire({
    title: question,
    text: 'Una vez eliminado, no se podran revertir los cambios',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí',
    cancelButtonText: 'No',
  }).then((result) => {
    if (result.isConfirmed) {
      resp = true;
    }
  });
  return resp;
}
