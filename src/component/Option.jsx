import React from "react";
import { deleteData, getData } from "../utils/axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function Option(props) {
  const cellValue = props.valueFormatted ? props.valueFormatted : props.value;
  const navigate = useNavigate()
  const handleDelete = (e) => {
    e.preventDefault();
    swal({
      title: "apakah yakin dihapus?",
      text: "Sekali terhapus, anda tidak akan bisa melihat datanya lagi!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteData(cellValue)
          .then((res) => {
            window.location.reload();
          })
          .catch((err) => console.log("GAGAL", err));
        swal("Data terhapus!", {
          icon: "success",
        });
      } else {
        swal("Data Aman!");
      }
    });


  };

  const handleUpdate = (e) => {
    e.preventDefault()
    // getData()
    //   .then((res) => { 
    //     const data = res.data
    //     const dataUpdate = data.find(item => item._id === cellValue ? item : '')
    //     localStorage.setItem('data', JSON.stringify(dataUpdate))
    //   })
    //   .catch((err) => console.log('GAGAL =>', err))

    localStorage.setItem('data', JSON.stringify(props.data))
    navigate('/inputtamu')
  }
  console.log('props =>', props.data);
  return (
    <div className="space-x-2">
      <button onClick={(e) => handleUpdate(e)} className="w-16 h-9 bg-bege text-white font-bold rounded-md shadow-black/40 shadow-md active:bg-bege/40">
        Update
      </button>
      <button
        onClick={(e) => handleDelete(e)}
        className="w-16 h-9 bg-icon text-white font-bold rounded-md shadow-black/40 shadow-md active:bg-icon/40"
      >
        Delete
      </button>
    </div>
  );
}

export default Option;
