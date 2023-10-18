import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import SideBar from "./SideBar";
import { FaPlus, FaTrash } from "react-icons/fa";
import AddUsers from "./overlays/AddUsers";
import { useGetallordersQuery } from "../../app/api/adminApi";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { FaPencil } from "react-icons/fa6";

const Orders = () => {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);

  const { data: orders, isLoading, error } = useGetallordersQuery();

  const openOverlay = () => {
    setOpen(true);
  };

  const closeOverlay = () => {
    setOpen(false);
  };

  const openEdit = () => {
    setEdit(true);
  };

  const closeEdit = () => {
    setEdit(false);
  };

  useEffect(() => {}, [orders]);

  const rows = orders?.orders;
  console.log(rows);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "method",
      headerName: "Method",
      width: 150,
    },
    {
      field: "total",
      headerName: "Total",
      width: 110,
    },
    {
      field: "address",
      headerName: "Address",
      width: 110,
    },
    {
      field: "user",
      headerName: "User",
      width: 110,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => (
        <div className="flex items-center space-x-2">
          <button
            className="p-2 rounded-md flex items-center space-x-2"
            onClick={openEdit}
          >
            <FaPencil className="text-green-600" />
          </button>
          <button className="p-2 rounded-md flex items-center space-x-2">
            <FaTrash className="text-red-500" />
          </button>
        </div>
      ),
    },
  ];
  return (
    <div className="overflow-hidden h-screen bg-bgcolor">
      <AdminNav />
      <div className="flex divide-x divide-grey ">
        <SideBar />
        <div className="w-full text-color">
          <div className="flex justify-between px-6 py-4">
            <h1 className="text-2xl font-bold">Orders</h1>
            <button
              className="p-2 bg-slate-400 rounded-md flex items-center space-x-2"
              onClick={() => setOpen(!open)}
            >
              <FaPlus />
              <span>Add Orders</span>
            </button>
            {open ? (
              <AddUsers overlayOpen={open} closeOverlay={closeOverlay} />
            ) : (
              ""
            )}
          </div>

          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div className="mx-6 bg-color">
              <DataGrid
                className=""
                rows={rows?.map((item, index) => ({ id: index + 1, ...item }))}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                  toolbar: {
                    showQuickFilter: true,
                    quickFilterProps: {
                      debounceMs: 500,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
