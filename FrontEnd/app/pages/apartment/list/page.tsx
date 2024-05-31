'use client'

import * as React from 'react';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NextPage } from "next";
import { findAllApartments } from "@/app/components/apartment/service/apartment-service";
import { getAllApartments } from "@/app/components/apartment/service/apartment-slice";
import ApartmentColumns from "@/app/components/apartment/module/apartment-columns";
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { IApartment } from '@/app/components/apartment/model/apartment';
import AppAppBar from '../../test/page';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const names = [
  '매매',
  '전세',
  '월세'
];

const ApartmentsPage: NextPage = () => {
  const [pageSize, setPageSize] = useState(5);
  const dispatch = useDispatch();
  const theme = useTheme();
  const allApartments: IApartment[] = useSelector(getAllApartments) || [];

  useEffect(() => {
    dispatch(findAllApartments(1));
  }, [dispatch]);

  function getStyles(name: string, personName: readonly string[], theme: Theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const MultipleSelectChip = () => {
    const [personName, setPersonName] = useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
      const {
        target: { value },
      } = event;
      setPersonName(typeof value === "string" ? value.split(",") : value);
    };

    return (
      <>
        <header style={{ backgroundColor: '#f8f9fa', padding: '10px 0', textAlign: 'center', borderBottom: '1px solid #dee2e6' }}>
          <h1><img src="/SmallBangEz.png" alt="팀 아이콘" /> 부동산 목록</h1>
        </header>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '262px', marginTop: '20px' }}>
          <FormControl sx={{ m: 3, width: 250, transform: 'translateX(1px)' }}>
            <InputLabel id="demo-multiple-chip-label">거래 유형</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </>
    );
    
  };

  const [open, setOpen] = useState(false);
  const [selectedApartment, setSelectedApartment] = useState<IApartment | null>(null);

  const handleOpen = (apartment: IApartment) => {
    setSelectedApartment(apartment);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const columns: GridColDef[] = [
    ...ApartmentColumns(),
    {
      field: 'actions',
      headerName: '상세 표시',
      renderCell: (params) => (
        <Button variant="contained" onClick={() => handleOpen(params.row as IApartment)}>
          자세히
        </Button>
      ),
      sortable: false,
      filterable: false,
    },
  ];

  return (
    <>
      <MultipleSelectChip />
      <div style={{ display: 'flex', justifyContent: 'center', height: 500 }}>
        <div style={{ width: "70%" }}>
        {allApartments && (
          <DataGrid
            rows={allApartments}
            columns={columns}
            // pageSize={pageSize}
            // onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            pagination
          />
        )}
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            text in area1
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            gogo1
          </Typography>
          <Typography id="modal-title" variant="h6" component="h2"sx={{ mt: 2 }}>
            text in area2
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            gogo2
          </Typography>
          <Typography id="modal-title" variant="h6" component="h2"sx={{ mt: 2 }}>
            text in area3
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            gogo3
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default ApartmentsPage;
