import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dispatchData:   [
    {
        "dispatch_id": 168757,
        "confirmation_no": 204719,
        "status": "Clear At Destination",
        "driver_id": 4346,
        "reservation_type": "normal",
        "car_type": "SUV FE TEST",
        "fname": "micheale ",
        "lname": "johnson",
        "telephone": "0900090",
        "pu_time": "01:00",
        "pu_street": null,
        "pu_location": "Address",
        "de_street": null,
        "de_location": "Address",
        "origin": "Manhattan St, Paradise, NV 89119, USA",
        "destination": "Las Vegas, NV, USA",
        "price": 69.08,
        "hidden": 0,
        "pu_date": "2023-12-02",
        "company_id": 966,
        "reservation_id": 204719,
        "accepted": 6,
        "company_name": "Techesthete",
        "driver_fname": "Amanda Fitzpatrick",
        "driver_lname": "Mariko Mullen",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": "#375faa"
    },
    {
        "dispatch_id": null,
        "confirmation_no": 204720,
        "status": "Pending",
        "driver_id": null,
        "reservation_type": "normal",
        "car_type": "MPV",
        "fname": "micheale ",
        "lname": "johnson",
        "telephone": "0900090",
        "pu_time": "12:02",
        "pu_street": null,
        "pu_location": "Address",
        "de_street": null,
        "de_location": "Address",
        "origin": "Manhattan St, Paradise, NV 89119, USA",
        "destination": "Las Vegas, NV, USA",
        "price": 3570.66,
        "hidden": 0,
        "pu_date": "2023-12-02",
        "company_id": 966,
        "reservation_id": 204720,
        "accepted": 0,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": "#b72b2b"
    },
    {
        "dispatch_id": null,
        "confirmation_no": 204727,
        "status": "Pending",
        "driver_id": null,
        "reservation_type": "normal",
        "car_type": "SUV 7 seats",
        "fname": "john",
        "lname": "Deo",
        "telephone": "090909009090",
        "pu_time": "12:04",
        "pu_street": null,
        "pu_location": "Address",
        "de_street": null,
        "de_location": "Address",
        "origin": "Manhattan Ave, Brooklyn, NY, USA",
        "destination": "Long Island Rail Road, Massapequa, NY, USA",
        "price": 22840.82,
        "hidden": 0,
        "pu_date": "2023-12-15",
        "company_id": 966,
        "reservation_id": 204727,
        "accepted": 0,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": "#b72b2b"
    },
    {
        "dispatch_id": 168758,
        "confirmation_no": 204728,
        "status": "Farmout Accepted",
        "driver_id": null,
        "reservation_type": "normal",
        "car_type": "SUV 7 seats",
        "fname": "name",
        "lname": "last",
        "telephone": "99809980098",
        "pu_time": "12:03",
        "pu_street": null,
        "pu_location": "Address",
        "de_street": null,
        "de_location": "Address",
        "origin": "Manhattan Ave, Brooklyn, NY, USA",
        "destination": "Long Island Rail Road, Massapequa, NY, USA",
        "price": 22840.82,
        "hidden": 0,
        "pu_date": "2023-12-21",
        "company_id": 966,
        "reservation_id": 204728,
        "accepted": 8,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": "#23a83c"
    },
    {
        "dispatch_id": 168759,
        "confirmation_no": 204729,
        "status": "Accepted",
        "driver_id": null,
        "reservation_type": "normal",
        "car_type": "SUV 7 seats",
        "fname": "",
        "lname": "",
        "telephone": "",
        "pu_time": "12:00",
        "pu_street": null,
        "pu_location": "Address",
        "de_street": null,
        "de_location": "Address",
        "origin": "Manhattan Ave, Brooklyn, NY, USA",
        "destination": "Long Island Rail Road, Massapequa, NY, USA",
        "price": 22840.82,
        "hidden": 0,
        "pu_date": "2023-12-29",
        "company_id": 966,
        "reservation_id": 204729,
        "accepted": 1,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": "#d49416"
    },
    {
        "dispatch_id": null,
        "confirmation_no": 204730,
        "status": "Pending",
        "driver_id": null,
        "reservation_type": "normal",
        "car_type": "2996.0",
        "fname": "",
        "lname": "",
        "telephone": "",
        "pu_time": "05:04",
        "pu_street": null,
        "pu_location": "Address",
        "de_street": null,
        "de_location": "Address",
        "origin": "Manhattan Ave, Brooklyn, NY, USA",
        "destination": null,
        "price": 20989.8,
        "hidden": 0,
        "pu_date": "2023-12-29",
        "company_id": 966,
        "reservation_id": 204730,
        "accepted": 0,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": "#b72b2b"
    },
    {
        "dispatch_id": 168760,
        "confirmation_no": 204732,
        "status": "Accepted",
        "driver_id": null,
        "reservation_type": "normal",
        "car_type": "SUV 7 seats",
        "fname": "",
        "lname": "",
        "telephone": "17655678",
        "pu_time": "09:02 PM",
        "pu_street": null,
        "pu_location": "Address",
        "de_street": null,
        "de_location": "Address",
        "origin": "New St, New York, NY, USA",
        "destination": "Manhattan Ave, Brooklyn, NY, USA",
        "price": 4557.37,
        "hidden": 0,
        "pu_date": "2024-01-01",
        "company_id": 966,
        "reservation_id": 204732,
        "accepted": 1,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": "#d49416"
    },
    {
        "dispatch_id": null,
        "confirmation_no": 204734,
        "status": "Pending",
        "driver_id": null,
        "reservation_type": "normal",
        "car_type": "SUV 7 seats",
        "fname": "",
        "lname": "",
        "telephone": "",
        "pu_time": "02:00",
        "pu_street": null,
        "pu_location": "Address",
        "de_street": null,
        "de_location": "Address",
        "origin": "Manhattan Ave, Brooklyn, NY, USA",
        "destination": "Stamford, CT, USA",
        "price": 217.04,
        "hidden": 0,
        "pu_date": "2024-01-04",
        "company_id": 966,
        "reservation_id": 204734,
        "accepted": 0,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": "#b72b2b"
    },
    {
        "dispatch_id": null,
        "confirmation_no": 204735,
        "status": "Pending",
        "driver_id": null,
        "reservation_type": "normal",
        "car_type": "MPV",
        "fname": "",
        "lname": "",
        "telephone": "13215434567",
        "pu_time": "03:02",
        "pu_street": null,
        "pu_location": "Address",
        "de_street": null,
        "de_location": "Address",
        "origin": "New Jersey Turnpike, Kearny, NJ, USA",
        "destination": "Long Island Rail Road, Massapequa, NY, USA",
        "price": 49466.23,
        "hidden": 0,
        "pu_date": "2024-01-04",
        "company_id": 966,
        "reservation_id": 204735,
        "accepted": 0,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": "#b72b2b"
    },
    {
        "dispatch_id": null,
        "confirmation_no": 204736,
        "status": "Pending",
        "driver_id": null,
        "reservation_type": "normal",
        "car_type": "MPV",
        "fname": "",
        "lname": "",
        "telephone": "13215434567",
        "pu_time": "03:02",
        "pu_street": null,
        "pu_location": "Address",
        "de_street": null,
        "de_location": "Address",
        "origin": "New Jersey Turnpike, Kearny, NJ, USA",
        "destination": "Long Island Rail Road, Massapequa, NY, USA",
        "price": 49466.23,
        "hidden": 0,
        "pu_date": "2024-01-04",
        "company_id": 966,
        "reservation_id": 204736,
        "accepted": 0,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": "#b72b2b"
    },
    {
        "dispatch_id": null,
        "confirmation_no": 204737,
        "status": "Pending",
        "driver_id": null,
        "reservation_type": "normal",
        "car_type": "testing",
        "fname": "",
        "lname": "",
        "telephone": "13245678765",
        "pu_time": "02:07",
        "pu_street": null,
        "pu_location": "Airport",
        "de_street": null,
        "de_location": "Address",
        "origin": "John F. Kennedy International Hwy, Derby, VT, USA",
        "destination": "350 W 42nd St, New York, NY 10036, USA",
        "price": 2040.4,
        "hidden": 0,
        "pu_date": "2024-01-04",
        "company_id": 966,
        "reservation_id": 204737,
        "accepted": 0,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": "#b72b2b"
    },
    {
        "dispatch_id": null,
        "confirmation_no": 204738,
        "status": "Pending",
        "driver_id": null,
        "reservation_type": "normal",
        "car_type": "3018.0",
        "fname": "",
        "lname": "",
        "telephone": "17654345666",
        "pu_time": "02:06",
        "pu_street": null,
        "pu_location": "Address",
        "de_street": null,
        "de_location": "Address",
        "origin": "Atlantic City Expy, New Jersey, USA",
        "destination": null,
        "price": 779.5,
        "hidden": 0,
        "pu_date": "2024-01-04",
        "company_id": 966,
        "reservation_id": 204738,
        "accepted": 0,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": "#b72b2b"
    },
    {
        "dispatch_id": null,
        "confirmation_no": 204739,
        "status": "Pending",
        "driver_id": null,
        "reservation_type": "normal",
        "car_type": "3017.0",
        "fname": "john ",
        "lname": "smith",
        "telephone": "13445654345",
        "pu_time": "04:07",
        "pu_street": null,
        "pu_location": "Address",
        "de_street": null,
        "de_location": "Address",
        "origin": "Atlantic City Blvd, Berkeley Township, NJ, USA",
        "destination": null,
        "price": 590,
        "hidden": 0,
        "pu_date": "2024-01-05",
        "company_id": 966,
        "reservation_id": 204739,
        "accepted": 0,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": "#b72b2b"
    },
    {
        "dispatch_id": null,
        "confirmation_no": 204740,
        "status": "Pending",
        "driver_id": null,
        "reservation_type": "normal",
        "car_type": "car name ",
        "fname": "new ",
        "lname": "reservation",
        "telephone": "12324565545",
        "pu_time": "04:10",
        "pu_street": null,
        "pu_location": "Address",
        "de_street": null,
        "de_location": "Address",
        "origin": "Manhattan Ave, Brooklyn, NY, USA",
        "destination": "Long Island Rail Road, Massapequa, NY, USA",
        "price": 225,
        "hidden": 0,
        "pu_date": "2024-01-04",
        "company_id": 966,
        "reservation_id": 204740,
        "accepted": 0,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": "#b72b2b"
    },
    {
        "dispatch_id": null,
        "confirmation_no": 204741,
        "status": "Pending",
        "driver_id": null,
        "reservation_type": "normal",
        "car_type": "car name here ",
        "fname": "new",
        "lname": "reserve",
        "telephone": "14235666666",
        "pu_time": "05:05",
        "pu_street": null,
        "pu_location": "Address",
        "de_street": null,
        "de_location": "Address",
        "origin": "Manhattan Ave, Brooklyn, NY, USA",
        "destination": "Long Island Rail Road, Massapequa, NY, USA",
        "price": 193.96,
        "hidden": 0,
        "pu_date": "2024-01-06",
        "company_id": 966,
        "reservation_id": 204741,
        "accepted": 0,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": "#b72b2b"
    },
    {
        "dispatch_id": null,
        "confirmation_no": 204742,
        "status": "Pending",
        "driver_id": null,
        "reservation_type": "normal",
        "car_type": "3016.0",
        "fname": "hourly ",
        "lname": "reser",
        "telephone": "16543456789",
        "pu_time": "02:03",
        "pu_street": null,
        "pu_location": "Address",
        "de_street": null,
        "de_location": "Address",
        "origin": "Manhattan Ave, Brooklyn, NY, USA",
        "destination": null,
        "price": 379,
        "hidden": 0,
        "pu_date": "2024-01-07",
        "company_id": 966,
        "reservation_id": 204742,
        "accepted": 0,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": "#b72b2b"
    },
    {
        "dispatch_id": null,
        "confirmation_no": 204743,
        "status": "Pending",
        "driver_id": null,
        "reservation_type": "hourly",
        "car_type": "testing",
        "fname": "hourly ",
        "lname": "test",
        "telephone": "19865434567",
        "pu_time": "01:03",
        "pu_street": null,
        "pu_location": "Address",
        "de_street": null,
        "de_location": "Airport",
        "origin": "Manhattan Ave, Brooklyn, NY, USA",
        "destination": "LaGuardia Airport Entrance, Queens, NY, USA",
        "price": 377.2,
        "hidden": 0,
        "pu_date": "2024-01-08",
        "company_id": 966,
        "reservation_id": 204743,
        "accepted": 0,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": "#b72b2b"
    },
    {
        "dispatch_id": 168767,
        "confirmation_no": 204744,
        "status": "Accepted",
        "driver_id": null,
        "reservation_type": "normal",
        "car_type": "new car",
        "fname": "one more ",
        "lname": "reservation",
        "telephone": "13332456788",
        "pu_time": "03:05",
        "pu_street": null,
        "pu_location": "Address",
        "de_street": null,
        "de_location": "Address",
        "origin": "333 J1-, Block J1 Block J 1 Phase 2 Johar Town, Lahore, Punjab 54600, Pakistan",
        "destination": "WAPDA Town Lahore, Punjab, Pakistan",
        "price": 45,
        "hidden": 0,
        "pu_date": "2024-01-11",
        "company_id": 966,
        "reservation_id": 204744,
        "accepted": 1,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": "#d49416"
    },
    {
        "dispatch_id": null,
        "confirmation_no": 204745,
        "status": "Pending",
        "driver_id": null,
        "reservation_type": "normal",
        "car_type": "new car",
        "fname": "one more ",
        "lname": "reservation",
        "telephone": "13332456788",
        "pu_time": "03:05",
        "pu_street": null,
        "pu_location": "Address",
        "de_street": null,
        "de_location": "Address",
        "origin": "WAPDA Town Lahore, Punjab, Pakistan",
        "destination": "333 J1-, Block J1 Block J 1 Phase 2 Johar Town, Lahore, Punjab 54600, Pakistan",
        "price": 45,
        "hidden": 0,
        "pu_date": "2024-01-11",
        "company_id": 966,
        "reservation_id": 204745,
        "accepted": 0,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": "#b72b2b"
    },
    {
        "dispatch_id": null,
        "confirmation_no": 204746,
        "status": "Pending",
        "driver_id": null,
        "reservation_type": "hourly",
        "car_type": "testing",
        "fname": "hourly ",
        "lname": "reservation",
        "telephone": "16543234567",
        "pu_time": "05:05",
        "pu_street": null,
        "pu_location": "Airport",
        "de_street": null,
        "de_location": "Address",
        "origin": "Airport Ave, Cantt, Lahore, Punjab, Pakistan",
        "destination": "Wapda Town Rd, Block M Wapda City, Faisalabad, Punjab, Pakistan",
        "price": 1000,
        "hidden": 0,
        "pu_date": "2024-01-10",
        "company_id": 966,
        "reservation_id": 204746,
        "accepted": 0,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": "#b72b2b"
    },
    {
        "dispatch_id": null,
        "confirmation_no": 204747,
        "status": "Pending",
        "driver_id": null,
        "reservation_type": "hourly",
        "car_type": "testing",
        "fname": "hourly ",
        "lname": "reservation",
        "telephone": "16543234567",
        "pu_time": "05:05",
        "pu_street": null,
        "pu_location": "Airport",
        "de_street": null,
        "de_location": "Address",
        "origin": "Airport Ave, Cantt, Lahore, Punjab, Pakistan",
        "destination": "Wapda Town Rd, Block M Wapda City, Faisalabad, Punjab, Pakistan",
        "price": 1000,
        "hidden": 0,
        "pu_date": "2024-01-10",
        "company_id": 966,
        "reservation_id": 204747,
        "accepted": 0,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": "#b72b2b"
    },
    {
        "dispatch_id": null,
        "confirmation_no": 204748,
        "status": "Pending",
        "driver_id": null,
        "reservation_type": "hourly",
        "car_type": "testing",
        "fname": "hourly ",
        "lname": "reservation",
        "telephone": "16543234567",
        "pu_time": "05:05",
        "pu_street": null,
        "pu_location": "Airport",
        "de_street": null,
        "de_location": "Address",
        "origin": "Airport Ave, Cantt, Lahore, Punjab, Pakistan",
        "destination": "Wapda Town Rd, Block M Wapda City, Faisalabad, Punjab, Pakistan",
        "price": 1000,
        "hidden": 0,
        "pu_date": "2024-01-10",
        "company_id": 966,
        "reservation_id": 204748,
        "accepted": 0,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": "#b72b2b"
    },
    {
        "dispatch_id": null,
        "confirmation_no": 204749,
        "status": "Pending",
        "driver_id": null,
        "reservation_type": "hourly",
        "car_type": "testing",
        "fname": "hourly ",
        "lname": "reservation",
        "telephone": "16543234567",
        "pu_time": "05:05",
        "pu_street": null,
        "pu_location": "Airport",
        "de_street": null,
        "de_location": "Address",
        "origin": "Airport Ave, Cantt, Lahore, Punjab, Pakistan",
        "destination": "Wapda Town Rd, Block M Wapda City, Faisalabad, Punjab, Pakistan",
        "price": 1000,
        "hidden": 0,
        "pu_date": "2024-01-10",
        "company_id": 966,
        "reservation_id": 204749,
        "accepted": 0,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": "#b72b2b"
    },
    {
        "dispatch_id": null,
        "confirmation_no": 204750,
        "status": "Pending",
        "driver_id": null,
        "reservation_type": "hourly",
        "car_type": "testing",
        "fname": "hourly ",
        "lname": "reservation",
        "telephone": "16543234567",
        "pu_time": "05:05",
        "pu_street": null,
        "pu_location": "Airport",
        "de_street": null,
        "de_location": "Address",
        "origin": "Airport Ave, Cantt, Lahore, Punjab, Pakistan",
        "destination": "Wapda Town Rd, Block M Wapda City, Faisalabad, Punjab, Pakistan",
        "price": 1000,
        "hidden": 0,
        "pu_date": "2024-01-10",
        "company_id": 966,
        "reservation_id": 204750,
        "accepted": 0,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": "#b72b2b"
    },
    {
        "dispatch_id": null,
        "confirmation_no": 204751,
        "status": "Pending",
        "driver_id": null,
        "reservation_type": "hourly",
        "car_type": "testing",
        "fname": "hourly ",
        "lname": "reservation",
        "telephone": "16543234567",
        "pu_time": "05:05",
        "pu_street": null,
        "pu_location": "Airport",
        "de_street": null,
        "de_location": "Address",
        "origin": "Wapda Town Rd, Block M Wapda City, Faisalabad, Punjab, Pakistan",
        "destination": "Airport Ave, Cantt, Lahore, Punjab, Pakistan",
        "price": 1000,
        "hidden": 0,
        "pu_date": "2024-01-10",
        "company_id": 966,
        "reservation_id": 204751,
        "accepted": 0,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": "#b72b2b"
    },
    {
        "dispatch_id": 168761,
        "confirmation_no": 204752,
        "status": "Farmout Accepted",
        "driver_id": 4349,
        "reservation_type": "normal",
        "car_type": "new car",
        "fname": "simple",
        "lname": "reservation",
        "telephone": "15432345678",
        "pu_time": "03:04",
        "pu_street": null,
        "pu_location": "Airport",
        "de_street": null,
        "de_location": "Airport",
        "origin": "Manhattan Ave, Brooklyn, NY, USA",
        "destination": "Atlantic City, NJ, USA",
        "price": 920,
        "hidden": 0,
        "pu_date": "2024-01-11",
        "company_id": 966,
        "reservation_id": 204752,
        "accepted": 8,
        "company_name": "Techesthete",
        "driver_fname": "Colt Ingram",
        "driver_lname": "Kay Wilder",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": "#23a83c"
    },
    {
        "dispatch_id": null,
        "confirmation_no": null,
        "status": null,
        "driver_id": null,
        "reservation_type": "normal",
        "car_type": "new car",
        "fname": "simple",
        "lname": "reservation",
        "telephone": "15432345678",
        "pu_time": "03:04",
        "pu_street": null,
        "pu_location": "Airport",
        "de_street": null,
        "de_location": "Airport",
        "origin": "Manhattan Ave, Brooklyn, NY, USA",
        "destination": "Atlantic City, NJ, USA",
        "price": 920,
        "hidden": 0,
        "pu_date": "2024-01-11",
        "company_id": 966,
        "reservation_id": 204753,
        "accepted": 1,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": ""
    },
    {
        "dispatch_id": null,
        "confirmation_no": null,
        "status": null,
        "driver_id": null,
        "reservation_type": "normal",
        "car_type": "new car",
        "fname": "simple",
        "lname": "reservation",
        "telephone": "15432345678",
        "pu_time": "03:04",
        "pu_street": null,
        "pu_location": "Airport",
        "de_street": null,
        "de_location": "Airport",
        "origin": "Manhattan Ave, Brooklyn, NY, USA",
        "destination": "Atlantic City, NJ, USA",
        "price": 920,
        "hidden": 0,
        "pu_date": "2024-01-11",
        "company_id": 966,
        "reservation_id": 204754,
        "accepted": 1,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": ""
    },
    {
        "dispatch_id": null,
        "confirmation_no": null,
        "status": null,
        "driver_id": null,
        "reservation_type": "normal",
        "car_type": "new car",
        "fname": "simple",
        "lname": "reservation",
        "telephone": "15432345678",
        "pu_time": "03:04",
        "pu_street": null,
        "pu_location": "Airport",
        "de_street": null,
        "de_location": "Airport",
        "origin": "Atlantic City, NJ, USA",
        "destination": "Manhattan Ave, Brooklyn, NY, USA",
        "price": 920,
        "hidden": 0,
        "pu_date": "2024-01-11",
        "company_id": 966,
        "reservation_id": 204755,
        "accepted": 1,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": ""
    },
    {
        "dispatch_id": null,
        "confirmation_no": null,
        "status": null,
        "driver_id": null,
        "reservation_type": "normal",
        "car_type": "new car",
        "fname": "simple",
        "lname": "reservation",
        "telephone": "15432345678",
        "pu_time": "03:04",
        "pu_street": null,
        "pu_location": "Airport",
        "de_street": null,
        "de_location": "Airport",
        "origin": "Atlantic City, NJ, USA",
        "destination": "Manhattan Ave, Brooklyn, NY, USA",
        "price": 920,
        "hidden": 0,
        "pu_date": "2024-01-11",
        "company_id": 966,
        "reservation_id": 204756,
        "accepted": 1,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": ""
    },
    {
        "dispatch_id": null,
        "confirmation_no": null,
        "status": null,
        "driver_id": null,
        "reservation_type": "normal",
        "car_type": "new car",
        "fname": "simple",
        "lname": "reservation",
        "telephone": "15432345678",
        "pu_time": "03:04",
        "pu_street": null,
        "pu_location": "Airport",
        "de_street": null,
        "de_location": "Airport",
        "origin": "Atlantic City, NJ, USA",
        "destination": "Manhattan Ave, Brooklyn, NY, USA",
        "price": 920,
        "hidden": 0,
        "pu_date": "2024-01-11",
        "company_id": 966,
        "reservation_id": 204757,
        "accepted": 1,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": ""
    },
    {
        "dispatch_id": null,
        "confirmation_no": null,
        "status": null,
        "driver_id": null,
        "reservation_type": "normal",
        "car_type": "new car",
        "fname": "simple",
        "lname": "reservation",
        "telephone": "15432345678",
        "pu_time": "03:04",
        "pu_street": null,
        "pu_location": "Airport",
        "de_street": null,
        "de_location": "Airport",
        "origin": "Manhattan Ave, Brooklyn, NY, USA",
        "destination": "Atlantic City, NJ, USA",
        "price": 920,
        "hidden": 0,
        "pu_date": "2024-01-11",
        "company_id": 966,
        "reservation_id": 204758,
        "accepted": 1,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": ""
    },
    {
        "dispatch_id": null,
        "confirmation_no": null,
        "status": null,
        "driver_id": null,
        "reservation_type": "normal",
        "car_type": "new car",
        "fname": "simple",
        "lname": "reservation",
        "telephone": "15432345678",
        "pu_time": "03:04",
        "pu_street": null,
        "pu_location": "Airport",
        "de_street": null,
        "de_location": "Airport",
        "origin": "Atlantic City, NJ, USA",
        "destination": "Manhattan Ave, Brooklyn, NY, USA",
        "price": 920,
        "hidden": 0,
        "pu_date": "2024-01-11",
        "company_id": 966,
        "reservation_id": 204759,
        "accepted": 1,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": ""
    },
    {
        "dispatch_id": null,
        "confirmation_no": null,
        "status": null,
        "driver_id": null,
        "reservation_type": "normal",
        "car_type": "new car",
        "fname": "simple",
        "lname": "reservation",
        "telephone": "15432345678",
        "pu_time": "03:04",
        "pu_street": null,
        "pu_location": "Airport",
        "de_street": null,
        "de_location": "Airport",
        "origin": "Manhattan Ave, Brooklyn, NY, USA",
        "destination": "Atlantic City, NJ, USA",
        "price": 920,
        "hidden": 0,
        "pu_date": "2024-01-11",
        "company_id": 966,
        "reservation_id": 204760,
        "accepted": 1,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": ""
    },
    {
        "dispatch_id": null,
        "confirmation_no": null,
        "status": null,
        "driver_id": null,
        "reservation_type": "normal",
        "car_type": "new car",
        "fname": "simple",
        "lname": "reservation",
        "telephone": "15432345678",
        "pu_time": "03:04",
        "pu_street": null,
        "pu_location": "Airport",
        "de_street": null,
        "de_location": "Airport",
        "origin": "Manhattan Ave, Brooklyn, NY, USA",
        "destination": "Atlantic City, NJ, USA",
        "price": 920,
        "hidden": 0,
        "pu_date": "2024-01-11",
        "company_id": 966,
        "reservation_id": 204761,
        "accepted": 1,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": ""
    },
    {
        "dispatch_id": null,
        "confirmation_no": null,
        "status": null,
        "driver_id": null,
        "reservation_type": "normal",
        "car_type": "new car",
        "fname": "simple",
        "lname": "reservation",
        "telephone": "15432345678",
        "pu_time": "03:04",
        "pu_street": null,
        "pu_location": "Airport",
        "de_street": null,
        "de_location": "Airport",
        "origin": "Manhattan Ave, Brooklyn, NY, USA",
        "destination": "Atlantic City, NJ, USA",
        "price": 920,
        "hidden": 0,
        "pu_date": "2024-01-11",
        "company_id": 966,
        "reservation_id": 204762,
        "accepted": 1,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": ""
    },
    {
        "dispatch_id": null,
        "confirmation_no": null,
        "status": null,
        "driver_id": null,
        "reservation_type": "normal",
        "car_type": "new car",
        "fname": "simple",
        "lname": "reservation",
        "telephone": "15432345678",
        "pu_time": "03:04",
        "pu_street": null,
        "pu_location": "Airport",
        "de_street": null,
        "de_location": "Airport",
        "origin": "Manhattan Ave, Brooklyn, NY, USA",
        "destination": "Atlantic City, NJ, USA",
        "price": 920,
        "hidden": 0,
        "pu_date": "2024-01-11",
        "company_id": 966,
        "reservation_id": 204763,
        "accepted": 3,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": ""
    },
    {
        "dispatch_id": null,
        "confirmation_no": null,
        "status": null,
        "driver_id": null,
        "reservation_type": "normal",
        "car_type": "new car",
        "fname": "simple",
        "lname": "reservation",
        "telephone": "15432345678",
        "pu_time": "03:04",
        "pu_street": null,
        "pu_location": "Airport",
        "de_street": null,
        "de_location": "Airport",
        "origin": "Manhattan Ave, Brooklyn, NY, USA",
        "destination": "Atlantic City, NJ, USA",
        "price": 1000,
        "hidden": 0,
        "pu_date": "2024-01-11",
        "company_id": 966,
        "reservation_id": 204764,
        "accepted": 3,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": ""
    },
    {
        "dispatch_id": null,
        "confirmation_no": 204765,
        "status": "Pending",
        "driver_id": null,
        "reservation_type": "hourly",
        "car_type": "car name here ",
        "fname": "hourly ",
        "lname": "reserve",
        "telephone": "14343567899",
        "pu_time": "03:07",
        "pu_street": null,
        "pu_location": "Airport",
        "de_street": null,
        "de_location": "Address",
        "origin": "LaGuardia Airport Entrance, Queens, NY, USA",
        "destination": "Atlantic City Expy, New Jersey, USA",
        "price": 1400,
        "hidden": 0,
        "pu_date": "2024-01-18",
        "company_id": 966,
        "reservation_id": 204765,
        "accepted": 0,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": "#b72b2b"
    },
    {
        "dispatch_id": 168763,
        "confirmation_no": 204767,
        "status": "Accepted",
        "driver_id": null,
        "reservation_type": "hourly",
        "car_type": "car name here ",
        "fname": "hourly ",
        "lname": "reserve",
        "telephone": "14343567899",
        "pu_time": "03:07",
        "pu_street": null,
        "pu_location": "Airport",
        "de_street": null,
        "de_location": "Address",
        "origin": "Atlantic City Expy, New Jersey, USA",
        "destination": "LaGuardia Airport Entrance, Queens, NY, USA",
        "price": 1400,
        "hidden": 0,
        "pu_date": "2024-01-18",
        "company_id": 966,
        "reservation_id": 204767,
        "accepted": 1,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": "#d49416"
    },
    {
        "dispatch_id": null,
        "confirmation_no": 204768,
        "status": "Pending",
        "driver_id": null,
        "reservation_type": "normal",
        "car_type": "car name here ",
        "fname": "",
        "lname": "",
        "telephone": "",
        "pu_time": "02:02 PM",
        "pu_street": null,
        "pu_location": "Address",
        "de_street": null,
        "de_location": "Airport",
        "origin": "Manhattan Ave, Brooklyn, NY, USA",
        "destination": "Atlantic City, NJ, USA",
        "price": 827.75,
        "hidden": 0,
        "pu_date": "2024-01-08",
        "company_id": 966,
        "reservation_id": 204768,
        "accepted": 0,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": "#b72b2b"
    },
    {
        "dispatch_id": null,
        "confirmation_no": 204769,
        "status": "Pending",
        "driver_id": null,
        "reservation_type": "normal",
        "car_type": "car name here ",
        "fname": "",
        "lname": "",
        "telephone": "",
        "pu_time": "02:02 PM",
        "pu_street": null,
        "pu_location": "Address",
        "de_street": null,
        "de_location": "Airport",
        "origin": "Manhattan Ave, Brooklyn, NY, USA",
        "destination": "Atlantic City, NJ, USA",
        "price": 827.75,
        "hidden": 0,
        "pu_date": "2024-01-08",
        "company_id": 966,
        "reservation_id": 204769,
        "accepted": 0,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": "#b72b2b"
    },
    {
        "dispatch_id": 168762,
        "confirmation_no": 204770,
        "status": "Clear At Destination",
        "driver_id": 4347,
        "reservation_type": "normal",
        "car_type": "car name here ",
        "fname": "",
        "lname": "",
        "telephone": "",
        "pu_time": "02:02 PM",
        "pu_street": null,
        "pu_location": "Airport",
        "de_street": null,
        "de_location": "Address",
        "origin": "Atlantic City, NJ, USA",
        "destination": "Manhattan Ave, Brooklyn, NY, USA",
        "price": 827.75,
        "hidden": 0,
        "pu_date": "2024-01-08",
        "company_id": 966,
        "reservation_id": 204770,
        "accepted": 6,
        "company_name": "Techesthete",
        "driver_fname": "Kiayada Dale",
        "driver_lname": "Mason Hodge",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": "#375faa"
    },
    {
        "dispatch_id": null,
        "confirmation_no": 204772,
        "status": "Pending",
        "driver_id": null,
        "reservation_type": "normal",
        "car_type": "car name here ",
        "fname": "report",
        "lname": " testing",
        "telephone": "17647384724",
        "pu_time": "01:02",
        "pu_street": null,
        "pu_location": "Address",
        "de_street": null,
        "de_location": "Address",
        "origin": "Manhattan St, Paradise, NV 89119, USA",
        "destination": "Las Vegas, NV, USA",
        "price": 80,
        "hidden": 0,
        "pu_date": "2024-01-09",
        "company_id": 966,
        "reservation_id": 204772,
        "accepted": 0,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": "#b72b2b"
    },
    {
        "dispatch_id": null,
        "confirmation_no": 204773,
        "status": "Pending",
        "driver_id": null,
        "reservation_type": "normal",
        "car_type": "car name here ",
        "fname": "report",
        "lname": " testing",
        "telephone": "17647384724",
        "pu_time": "01:02",
        "pu_street": null,
        "pu_location": "Address",
        "de_street": null,
        "de_location": "Address",
        "origin": "Las Vegas, NV, USA",
        "destination": "Manhattan St, Paradise, NV 89119, USA",
        "price": 80,
        "hidden": 0,
        "pu_date": "2024-01-09",
        "company_id": 966,
        "reservation_id": 204773,
        "accepted": 0,
        "company_name": "Techesthete",
        "driver_fname": "",
        "driver_lname": "",
        "company_drivers": [
            {
                "driver_id": 4346,
                "driver_fname": "Amanda Fitzpatrick",
                "driver_lname": "Mariko Mullen",
                "company_id": 966
            },
            {
                "driver_id": 4347,
                "driver_fname": "Kiayada Dale",
                "driver_lname": "Mason Hodge",
                "company_id": 966
            },
            {
                "driver_id": 4348,
                "driver_fname": "Hashim Lynch",
                "driver_lname": "Jarrod Holland",
                "company_id": 966
            },
            {
                "driver_id": 4349,
                "driver_fname": "Colt Ingram",
                "driver_lname": "Kay Wilder",
                "company_id": 966
            }
        ],
        "company_status": [
            {
                "status_id": 7301,
                "status_name": "Assign name changed",
                "status_default": "Assign Affliate",
                "status_color": "#d54242",
                "company_id": 966
            },
            {
                "status_id": 7302,
                "status_name": "Clear At Destination",
                "status_default": "Clear At Destination",
                "status_color": "#375faa",
                "company_id": 966
            },
            {
                "status_id": 7303,
                "status_name": "Cust, In The Car",
                "status_default": "Cust, In The Car",
                "status_color": "#36b631",
                "company_id": 966
            },
            {
                "status_id": 7304,
                "status_name": "Dispatched",
                "status_default": "Dispatched",
                "status_color": "#aba83b",
                "company_id": 966
            },
            {
                "status_id": 7305,
                "status_name": "Accepted",
                "status_default": "Accepted",
                "status_color": "#d49416",
                "company_id": 966
            },
            {
                "status_id": 7306,
                "status_name": "Pending",
                "status_default": "Pending",
                "status_color": "#b72b2b",
                "company_id": 966
            },
            {
                "status_id": 7307,
                "status_name": "Farmout Accepted",
                "status_default": "Farmout Accepted",
                "status_color": "#23a83c",
                "company_id": 966
            }
        ],
        "status_color": "#b72b2b"
    }
],

}
const dispatchSlice = createSlice({
  name: "modals",
  initialState,

  reducers: {},
});

export default dispatchSlice.reducer;
export const {} = dispatchSlice.actions;
