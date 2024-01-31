import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

// type State{
//     carData:

// }

// type Actions{

// }

export const carDataStore = create()(
  immer((set) => ({
    // ********* state **********
    carData: [
      {
        car_id: 2969,
        car_type: "SUV FE TEST",
        price: 9,
        minimum_fare: 59,
        hourly_rate: 29,
        minimum_hours: 10,
        carorder: 2,
        company_id: 966,
        car_image:
          "https://pub-715a89b6e7aa46cb916de1c90ac96c57.r2.dev/cars/1699364918376_ryph9k.jpg",
        passanger_capacity: 7,
        luggage_capacity: 7,
        created_at: null,
        deleted_at: null,
      },
      {
        car_id: 2971,
        car_type: "MPV",
        price: 741,
        minimum_fare: 28,
        hourly_rate: 3,
        minimum_hours: 1,
        carorder: 2,
        company_id: 966,
        car_image:
          "https://pub-715a89b6e7aa46cb916de1c90ac96c57.r2.dev/cars/1699364918376_ryph9k.jpg",
        passanger_capacity: 21,
        luggage_capacity: 83,
        created_at: null,
        deleted_at: null,
      },
      {
        car_id: 2974,
        car_type: "Cabin",
        price: 355,
        minimum_fare: 41,
        hourly_rate: 24,
        minimum_hours: 16,
        carorder: 2,
        company_id: 966,
        car_image: "car image",
        passanger_capacity: 28,
        luggage_capacity: 72,
        created_at: null,
        deleted_at: null,
      },
      {
        car_id: 2994,
        car_type: "SUV",
        price: 745,
        minimum_fare: 82,
        hourly_rate: 26,
        minimum_hours: 7,
        carorder: 2,
        company_id: 966,
        car_image:
          "https://pub-715a89b6e7aa46cb916de1c90ac96c57.r2.dev/cars/1699364918376_ryph9k.jpg",
        passanger_capacity: 40,
        luggage_capacity: 34,
        created_at: null,
        deleted_at: null,
      },
      {
        car_id: 2995,
        car_type: "Limo",
        price: 36,
        minimum_fare: 42,
        hourly_rate: 73,
        minimum_hours: 70,
        carorder: 2,
        company_id: 966,
        car_image:
          "https://pub-715a89b6e7aa46cb916de1c90ac96c57.r2.dev/cars/1699973135276_gnzoms.jpg",
        passanger_capacity: 7,
        luggage_capacity: 7,
        created_at: null,
        deleted_at: null,
      },
      {
        car_id: 2996,
        car_type: "SUV 7 seats",
        price: 5,
        minimum_fare: 50,
        hourly_rate: 10,
        minimum_hours: 10,
        carorder: 2,
        company_id: 966,
        car_image:
          "https://pub-715a89b6e7aa46cb916de1c90ac96c57.r2.dev/cars/1699973460495_7gd5u9.jpg",
        passanger_capacity: 4,
        luggage_capacity: 1,
        created_at: null,
        deleted_at: null,
      },
      {
        car_id: 2997,
        car_type: "Non dolores qui duci",
        price: 9,
        minimum_fare: 24,
        hourly_rate: 45,
        minimum_hours: 8,
        carorder: 2,
        company_id: 966,
        car_image:
          "https://pub-715a89b6e7aa46cb916de1c90ac96c57.r2.dev/cars/1700040379653_opy62o.jpg",
        passanger_capacity: 8,
        luggage_capacity: 4,
        created_at: null,
        deleted_at: null,
      },
      {
        car_id: 2999,
        car_type: "vitz",
        price: 7,
        minimum_fare: 90,
        hourly_rate: 13,
        minimum_hours: 10,
        carorder: 2,
        company_id: 966,
        car_image:
          "https://pub-715a89b6e7aa46cb916de1c90ac96c57.r2.dev/cars/1701335619261_0q56nc.jpg",
        passanger_capacity: 4,
        luggage_capacity: 2,
        created_at: null,
        deleted_at: null,
      },
      {
        car_id: 3000,
        car_type: "elantra",
        price: 9,
        minimum_fare: 90,
        hourly_rate: 12,
        minimum_hours: 10,
        carorder: 2,
        company_id: 966,
        car_image:
          "https://pub-715a89b6e7aa46cb916de1c90ac96c57.r2.dev/cars/1701671782548_9gcj2f.jpg",
        passanger_capacity: 4,
        luggage_capacity: 3,
        created_at: null,
        deleted_at: null,
      },
      {
        car_id: 3001,
        car_type: "Vero lorem ipsum aut",
        price: 9,
        minimum_fare: 16,
        hourly_rate: 5,
        minimum_hours: 16,
        carorder: 2,
        company_id: 966,
        car_image:
          "https://pub-715a89b6e7aa46cb916de1c90ac96c57.r2.dev/cars/1699364918376_ryph9k.jpg",
        passanger_capacity: 7,
        luggage_capacity: 3,
        created_at: null,
        deleted_at: null,
      },
      {
        car_id: 3002,
        car_type: "Elit rerum voluptat edit check",
        price: 0,
        minimum_fare: 80,
        hourly_rate: 20,
        minimum_hours: 20,
        carorder: 2,
        company_id: 966,
        car_image:
          "https://pub-715a89b6e7aa46cb916de1c90ac96c57.r2.dev/cars/1701770099714_wduhb2.jpg",
        passanger_capacity: 4,
        luggage_capacity: 2,
        created_at: null,
        deleted_at: null,
      },
      {
        car_id: 3003,
        car_type: "Dolorem facere dicta",
        price: 372,
        minimum_fare: 40,
        hourly_rate: 95,
        minimum_hours: 54,
        carorder: 2,
        company_id: 966,
        car_image:
          "/https://pub-715a89b6e7aa46cb916de1c90ac96c57.r2.dev/cars/1699364918376_ryph9k.jpg",
        passanger_capacity: 84,
        luggage_capacity: 71,
        created_at: null,
        deleted_at: null,
      },
      {
        car_id: 3004,
        car_type: "Aut est eaque volup",
        price: 595,
        minimum_fare: 89,
        hourly_rate: 1,
        minimum_hours: 78,
        carorder: 2,
        company_id: 966,
        car_image:
          "https://pub-715a89b6e7aa46cb916de1c90ac96c57.r2.dev/cars/1699364918376_ryph9k.jpg",
        passanger_capacity: 74,
        luggage_capacity: 38,
        created_at: null,
        deleted_at: null,
      },
      {
        car_id: 3005,
        car_type: "sedan car",
        price: 528,
        minimum_fare: 82,
        hourly_rate: 32,
        minimum_hours: 66,
        carorder: 2,
        company_id: 966,
        car_image:
          "https://pub-715a89b6e7aa46cb916de1c90ac96c57.r2.dev/cars/1699364918376_ryph9k.jpg",
        passanger_capacity: 13,
        luggage_capacity: 73,
        created_at: null,
        deleted_at: null,
      },
      {
        car_id: 3006,
        car_type: "SUV 5 seat",
        price: 5,
        minimum_fare: 50,
        hourly_rate: 10,
        minimum_hours: 5,
        carorder: 2,
        company_id: 966,
        car_image:
          "https://pub-715a89b6e7aa46cb916de1c90ac96c57.r2.dev/cars/1699364918376_ryph9k.jpg",
        passanger_capacity: 4,
        luggage_capacity: 5,
        created_at: null,
        deleted_at: null,
      },
      {
        car_id: 3007,
        car_type: "car adding from FE ",
        price: 5,
        minimum_fare: 50,
        hourly_rate: 10,
        minimum_hours: 5,
        carorder: 2,
        company_id: 966,
        car_image:
          "https://pub-715a89b6e7aa46cb916de1c90ac96c57.r2.dev/cars/1699364918376_ryph9k.jpg",
        passanger_capacity: 4,
        luggage_capacity: 5,
        created_at: null,
        deleted_at: null,
      },
      {
        car_id: 3008,
        car_type: "test car",
        price: 10,
        minimum_fare: 5,
        hourly_rate: 5,
        minimum_hours: 5,
        carorder: 2,
        company_id: 966,
        car_image:
          "https://pub-715a89b6e7aa46cb916de1c90ac96c57.r2.dev/cars/1699364918376_ryph9k.jpg",
        passanger_capacity: 5,
        luggage_capacity: 4,
        created_at: null,
        deleted_at: null,
      },
      {
        car_id: 3009,
        car_type: "new car",
        price: 5,
        minimum_fare: 12,
        hourly_rate: 10,
        minimum_hours: 5,
        carorder: 2,
        company_id: 966,
        car_image:
          "https://pub-715a89b6e7aa46cb916de1c90ac96c57.r2.dev/cars/1699364918376_ryph9k.jpg",
        passanger_capacity: 5,
        luggage_capacity: 4,
        created_at: null,
        deleted_at: null,
      },
      {
        car_id: 3010,
        car_type: "car name here ",
        price: 5,
        minimum_fare: 50,
        hourly_rate: 10,
        minimum_hours: 5,
        carorder: 2,
        company_id: 966,
        car_image:
          "https://pub-715a89b6e7aa46cb916de1c90ac96c57.r2.dev/cars/1699364918376_ryph9k.jpg",
        passanger_capacity: 4,
        luggage_capacity: 5,
        created_at: null,
        deleted_at: null,
      },
      {
        car_id: 3011,
        car_type: "car name here ",
        price: 5,
        minimum_fare: 50,
        hourly_rate: 10,
        minimum_hours: 5,
        carorder: 2,
        company_id: 966,
        car_image:
          "  https://pub-715a89b6e7aa46cb916de1c90ac96c57.r2.dev/cars/1699364918376_ryph9k.jpg",
        passanger_capacity: 4,
        luggage_capacity: 5,
        created_at: null,
        deleted_at: null,
      },
      {
        car_id: 3012,
        car_type: "car name here ",
        price: 5,
        minimum_fare: 50,
        hourly_rate: 10,
        minimum_hours: 5,
        carorder: 2,
        company_id: 966,
        car_image:
          " https://pub-715a89b6e7aa46cb916de1c90ac96c57.r2.dev/cars/1701770099714_wduhb2.jpg",
        passanger_capacity: 4,
        luggage_capacity: 5,
        created_at: null,
        deleted_at: null,
      },
      {
        car_id: 3013,
        car_type: "car name here ",
        price: 5,
        minimum_fare: 50,
        hourly_rate: 10,
        minimum_hours: 5,
        carorder: 2,
        company_id: 966,
        car_image:
          "https://pub-715a89b6e7aa46cb916de1c90ac96c57.r2.dev/cars/1701770099714_wduhb2.jpg",
        passanger_capacity: 4,
        luggage_capacity: 5,
        created_at: null,
        deleted_at: null,
      },
      {
        car_id: 3014,
        car_type: "car name here ",
        price: 5,
        minimum_fare: 50,
        hourly_rate: 10,
        minimum_hours: 5,
        carorder: 2,
        company_id: 966,
        car_image:
          "  https://pub-715a89b6e7aa46cb916de1c90ac96c57.r2.dev/cars/1701770099714_wduhb2.jpg ",
        passanger_capacity: 4,
        luggage_capacity: 5,
        created_at: null,
        deleted_at: null,
      },
      {
        car_id: 3015,
        car_type: "car name here ",
        price: 5,
        minimum_fare: 50,
        hourly_rate: 10,
        minimum_hours: 5,
        carorder: 2,
        company_id: 966,
        car_image:
          "https://pub-715a89b6e7aa46cb916de1c90ac96c57.r2.dev/cars/1701770099714_wduhb2.jpg   ",
        passanger_capacity: 4,
        luggage_capacity: 5,
        created_at: null,
        deleted_at: null,
      },
      {
        car_id: 3016,
        car_type: "name of the car ",
        price: 5,
        minimum_fare: 100,
        hourly_rate: 10,
        minimum_hours: 10,
        carorder: 2,
        company_id: 966,
        car_image:
          "https://pub-715a89b6e7aa46cb916de1c90ac96c57.r2.dev/cars/1701770099714_wduhb2.jpg",
        passanger_capacity: 4,
        luggage_capacity: 5,
        created_at: null,
        deleted_at: null,
      },
      {
        car_id: 3017,
        car_type: "testing",
        price: 5,
        minimum_fare: 100,
        hourly_rate: 20,
        minimum_hours: 5,
        carorder: 2,
        company_id: 966,
        car_image:
          "https://pub-715a89b6e7aa46cb916de1c90ac96c57.r2.dev/cars/1701770099714_wduhb2.jpg",
        passanger_capacity: 4,
        luggage_capacity: 5,
        created_at: null,
        deleted_at: null,
      },
      {
        car_id: 3018,
        car_type: "car name ",
        price: 5,
        minimum_fare: 10,
        hourly_rate: 10,
        minimum_hours: 5,
        carorder: 2,
        company_id: 966,
        car_image:
          "https://pub-715a89b6e7aa46cb916de1c90ac96c57.r2.dev/cars/1701770099714_wduhb2.jpg",
        passanger_capacity: 4,
        luggage_capacity: 5,
        created_at: null,
        deleted_at: null,
      },
    ],

    // ********* actions ***********

    // delete car
    deleteCar: (car_id: number) =>
      set((state: any) => {
        const filteredData = state.carData.filter(
          (car: any) => car.car_id !== car_id
        );
        //   state.carData = filteredData;
        return { carData: filteredData };
      }),

    // edit car
    editCar: (data: any) => {
      const {
        car_id,
        car_type,
        hourly_rate,
        uploaded_image,
        luggage_capacity,
        minimum_fare,
        minimum_hours,
        passanger_capacity,
        price,
      } = data;

      set((state: any) => {
        state.carData?.map((car: any, index: number) => {
          if (car.car_id === car_id) {
            state.carData[index] = {
              ...state.carData[index],
              car_image :uploaded_image,
              car_type: car_type,
              hourly_rate: hourly_rate,
              luggage_capacity: luggage_capacity,
              minimum_fare: minimum_fare,
              minimum_hours: minimum_hours,
              passanger_capacity: passanger_capacity,
              price: price,
            }
          }
        });
      });
    },

    // add new car
    addNewCar: (data: any) =>
      set((state: any) => {
        const otherInfo = {
          carorder: Math.round(Math.random() * 50),
          company_id: Math.round(Math.random() * 500),
          created_at: null,
          deleted_at: null,
        };
        const mergedObject = { ...data, ...otherInfo };
        state.carData.push(mergedObject);
      }),
  }))
);
