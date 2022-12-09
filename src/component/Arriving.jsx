import React from 'react'
import { updateArriving } from "../utils/axios";
import swal from "sweetalert";

function Arriving(props) {
    const cellValue = props.valueFormatted ? props.valueFormatted : props.value;
    const id = props.data._id

    const handleUpdate = (e) => {
        e.preventDefault()
        swal({
            title: "apakah yakin diubah?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          }).then((willDelete) => {
            if (willDelete) {
                updateArriving(id, cellValue)
                .then((res) => {
                  window.location.reload();
                })
                .catch((err) => console.log("GAGAL", err));
              swal("Data terubah!", {
                icon: "success",
              });
            } else {
              swal("Data Aman!");
            }
          });  
    }
  return (
    <div className="space-x-2">
        {cellValue && cellValue === true ? <button onClick={(e) => handleUpdate(e)} className="w-16 h-9 bg-isArrived text-white font-bold rounded-md shadow-black/40 shadow-md active:bg-bege/40">
            Sudah
          </button> : <button
        onClick={(e) => handleUpdate(e)}
        className="w-16 h-9 bg-notArrived text-white font-bold rounded-md shadow-black/40 shadow-md active:bg-icon/40"
      >
        Belum
      </button>}
    </div>
    
  )
}

export default Arriving