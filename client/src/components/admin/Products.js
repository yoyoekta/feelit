import React, { useState } from "react";
import AdminNav from "./AdminNav";
import SideBar from "./SideBar";
import AddProduct from "./overlays/AddProduct";
import DeleteProduct from "./overlays/DeleteProduct";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { FaPencil, FaPlus, FaTrash } from "react-icons/fa6";
import { useGetproductsQuery } from "../../app/api/userApi";
import EditProduct from "./overlays/EditProduct";

const Products = () => {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editid, setEditid] = useState("");
  const [deleteid, setDeleteid] = useState("");
  const [confirmdelete, setConfirmDelete] = useState(false);

  const { data: products, isLoading, error } = useGetproductsQuery();

  const closeOverlay = () => {
    setOpen(false);
  };

  const openEdit = (id) => {
    console.log(id);
    setEdit(true);
  };

  const closeEdit = () => {
    setEdit(false);
  };

  const openDelete = (id) => {
    console.log(id);
    setConfirmDelete(true);
  };

  const closeDelete = () => {
    setConfirmDelete(false);
  };

  const rows = products?.products;

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "image",
      headerName: "Image",
      width: 100,
      renderCell: (params) => (
        <img
          src={params.row.image.secure_url}
          alt="Product Image"
          className="w-30 h-30 rounded-md m-2"
        />
      ),
    },
    {
      field: "name",
      headerName: "Product Name",
      width: 150,
    },
    {
      field: "category",
      headerName: "Category",
      width: 110,
    },
    {
      field: "brand",
      headerName: "Brand",
      width: 110,
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
    },
    {
      field: "size",
      headerName: "Size",
      width: 100,
    },
    {
      field: "qty",
      headerName: "Quantity",
      sortable: false,
      width: 100,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => (
        <div className="flex items-center space-x-2">
          <button
            className="p-2 rounded-md flex items-center space-x-2"
            onClick={() => {
              openEdit(params.row._id);
              setEditid(params.row._id);
            }}
          >
            <FaPencil className="text-green-600" />
          </button>
          <button
            className="p-2 rounded-md flex items-center space-x-2"
            onClick={() => {
              openDelete(params.row._id);
              setDeleteid(params.row._id);
            }}
          >
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
            <h1 className="text-2xl font-bold">Products</h1>
            <button
              className="p-2 bg-slate-400 rounded-md flex items-center space-x-2"
              onClick={() => setOpen(!open)}
            >
              <FaPlus />
              <span>Add Products</span>
            </button>
            {open ? (
              <AddProduct overlayOpen={open} closeOverlay={closeOverlay} />
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
                rows={rows.map((item, index) => ({ id: index + 1, ...item }))}
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
          {edit ? (
            <EditProduct
              id={editid}
              overlayOpen={edit}
              closeOverlay={closeEdit}
            />
          ) : (
            ""
          )}
          {confirmdelete ? (
            <DeleteProduct
              id={deleteid}
              overlayOpen={confirmdelete}
              closeOverlay={closeDelete}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
